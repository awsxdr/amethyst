import { createContext, PropsWithChildren, useCallback, useContext, useEffect, useMemo, useState } from "react"
import { useHubConnection } from "./SignalRHubConnection";
import { HubConnection } from "@microsoft/signalr";
import { useGameApi } from "./GameApiHook";
import { GameStageState, TripScoreState, TeamDetailsState, TeamScoreState, TeamSide, TeamTimeoutsState, JamLineupState, TimeoutListState, PeriodClockState, TimeoutClockState, JamClockState, LineupClockState, UndoListState } from "@/types";
import { CurrentTimeoutTypeState } from "@/types/CurrentTimeoutTypeState";
import { TeamJamStatsState } from "@/types/TeamJamStatsState";
import { v4 as uuidv4 } from 'uuid';
import { IntermissionClockState } from "@/types/IntermissionClockState";

type StateChanged<TState> = (state: TState) => void;
type StateWatch = <TState,>(stateName: string, onStateChange: StateChanged<TState>) => CallbackHandle;

type GameStateContextProps = {
    gameId?: string;
    stateNotifiers: StateNotifierMap;
    watchState: StateWatch;
    unwatchState: (stateName: string, handle: CallbackHandle) => void;
    connection?: HubConnection;
    hasConnection: boolean;
};

const GameStateContext = createContext<GameStateContextProps>({
    stateNotifiers: {},
    watchState: () => { throw new Error('watchState called before context created'); },
    unwatchState: () => { throw new Error('unwatchState called before context created'); },
    hasConnection: false,
});

type GameStateContextProviderProps = {
    gameId: string | undefined,
};

type StateNotifier = { [handle: CallbackHandle]: (genericState: object) => void };
type StateNotifierMap = { [key: string]: StateNotifier };

export const useCurrentTimeoutTypeState = () => useGameState<CurrentTimeoutTypeState>("CurrentTimeoutTypeState");
export const useGameStageState = () => useGameState<GameStageState>("GameStageState");
export const useJamLineupState = (side: TeamSide) => useGameState<JamLineupState>(`JamLineupState_${TeamSide[side]}`);
export const useJamStatsState = (side: TeamSide) => useGameState<TeamJamStatsState>(`TeamJamStatsState_${TeamSide[side]}`);
export const useTeamDetailsState = (side: TeamSide) => useGameState<TeamDetailsState>(`TeamDetailsState_${TeamSide[side]}`);
export const useTeamScoreState = (side: TeamSide) => useGameState<TeamScoreState>(`TeamScoreState_${TeamSide[side]}`);
export const useTeamTimeoutsState = (side: TeamSide) => useGameState<TeamTimeoutsState>(`TeamTimeoutsState_${TeamSide[side]}`);
export const useTripScoreState = (side: TeamSide) => useGameState<TripScoreState>(`TripScoreState_${TeamSide[side]}`);
export const useTimeoutListState = () => useGameState<TimeoutListState>("TimeoutListState");
export const usePeriodClockState = () => useGameState<PeriodClockState>("PeriodClockState");
export const useJamClockState = () => useGameState<JamClockState>("JamClockState");
export const useLineupClockState = () => useGameState<LineupClockState>("LineupClockState");
export const useTimeoutClockState = () => useGameState<TimeoutClockState>("TimeoutClockState");
export const useIntermissionClockState = () => useGameState<IntermissionClockState>("IntermissionClockState");
export const useClocks = () => ({
    periodClock: usePeriodClockState(),
    jamClock: useJamClockState(),
    lineupClock: useLineupClockState(),
    timeoutClock: useTimeoutClockState(),
    intermissionClock: useIntermissionClockState(),
});
export const useUndoListState = () => useGameState<UndoListState>("UndoListState");

export const useGameState = <TState,>(stateName: string) => {
    const context = useContext(GameStateContext);
    const [value, setValue] = useState<TState>();
    const gameApi = useGameApi();

    const getInitialState = useCallback(async (stateName: string) => {
        if(context.gameId) {
            return await gameApi.getGameState<TState>(context.gameId, stateName);
        }
        return undefined;
    }, [context.gameId]);

    useEffect(() => {
        getInitialState(stateName).then(setValue);
    }, [setValue, context.gameId]);

    useEffect(() => {
        const handle = context.watchState<TState>(stateName, setValue);

        return () => context.unwatchState(stateName, handle);
    }, [context.gameId, stateName, setValue]);

    return value;
}

export const useHasServerConnection = () => {
    const { hasConnection } = useContext(GameStateContext);

    return useMemo(() => hasConnection, [hasConnection]);
}

type CallbackHandle = string;

export const GameStateContextProvider = ({ gameId, children }: PropsWithChildren<GameStateContextProviderProps>) => {
    const [stateNotifiers, setStateNotifiers] = useState<StateNotifierMap>({});

    const handleConnectionDisconnect = async () => {
        if(!connection) return;

        Object.keys(stateNotifiers).forEach(stateName => {
            connection.invoke("UnwatchState", stateName);
        });
    }

    const { connection, isConnected } = useHubConnection(gameId && `game/${gameId}`, handleConnectionDisconnect);

    const watchState = <TState,>(stateName: string, onStateChange: StateChanged<TState>): CallbackHandle => {
        
        const newId = uuidv4();

        setStateNotifiers(sn => ({
                ...sn,
                [stateName]: {
                    ...(sn[stateName] ?? {}),
                    [newId]: genericState => onStateChange(genericState as TState)
                }
            }));

        return newId;
    }

    const unwatchState = (stateName: string, handle: CallbackHandle) => {
        setStateNotifiers(sn => {

            if (!sn[stateName]?.[handle]) {
                console.warn("Attempt to unwatch state with invalid handle", handle);
            }

            const { [handle]: _, ...newNotifier } = sn[stateName] ?? {};
            return {
                ...sn,
                [stateName]: newNotifier
            };
        });
    }

    useEffect(() => {
        if(!connection) {
            return;
        }

        Object.keys(stateNotifiers).forEach(stateName => {
            connection!.invoke("WatchState", stateName);
        });
    }, [connection, stateNotifiers]);

    useEffect(() => {
        (async () => {
            connection?.onreconnected(() => {
                Object.keys(stateNotifiers).forEach(stateName => connection?.invoke("WatchState", stateName));
            });
        })();
    }, [connection, stateNotifiers]);

    const notify = useCallback((stateName: string, state: object) => {
        Object.values(stateNotifiers[stateName])?.forEach(n => n(state));
    }, [gameId, stateNotifiers]);

    useEffect(() => {
        connection?.on("StateChanged", notify);
    }, [connection, notify]);

    const hasConnection = isConnected;

    return (
        <GameStateContext.Provider value={{ gameId, stateNotifiers, watchState, unwatchState, connection, hasConnection  }}>
            { children }
        </GameStateContext.Provider>
    )
}