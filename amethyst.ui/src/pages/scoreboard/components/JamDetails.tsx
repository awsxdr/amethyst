import { JamClock, PeriodClock } from "@/components/clocks"
import { ScoreboardComponent } from "./ScoreboardComponent"
import { GameStageState, TeamSide } from "@/types"
import { ClocksBar } from "./ClocksBar";
import { useJamLineupState, useJamStatsState, useTeamDetailsState } from "@/hooks";
import { useMemo } from "react";
import { ScaledText } from "@/components/ScaledText";
import { cn } from "@/lib/utils";

type JamDetailsProps = {
    gameStage: GameStageState;
    visible: boolean;
}

export const JamDetails = ({ gameStage, visible }: JamDetailsProps) => {

    const { jammerNumber: homeJammerNumber } = useJamLineupState(TeamSide.Home) ?? {};
    const { jammerNumber: awayJammerNumber } = useJamLineupState(TeamSide.Away) ?? {};

    const { team: homeTeam } = useTeamDetailsState(TeamSide.Home) ?? {};
    const { team: awayTeam } = useTeamDetailsState(TeamSide.Away) ?? {};

    const homeStats = useJamStatsState(TeamSide.Home);
    const awayStats = useJamStatsState(TeamSide.Away);    

    const homeJammerText = useMemo(
        () => homeTeam?.roster.find(s => s.number === homeJammerNumber)?.name ?? homeJammerNumber ?? "", 
        [homeTeam, homeJammerNumber]);

    const awayJammerText = useMemo(
        () => awayTeam?.roster.find(s => s.number === awayJammerNumber)?.name ?? awayJammerNumber ?? "", 
        [awayTeam, awayJammerNumber]);

    const homeIsLead = useMemo(() => homeStats?.lead && !homeStats?.lost, [homeStats]);
    const awayIsLead = useMemo(() => awayStats?.lead && !awayStats?.lost, [awayStats]);

    const jammerNameClassName = "w-full h-full justify-center text-center text-white";

    return (
        <ClocksBar visible={visible} className="flex-col">
            <div className="h-[40%] flex">
                <div className="w-1/2 h-full flex">
                    <ScaledText text={homeJammerText} className={cn(jammerNameClassName, homeIsLead ? "animate-pulse-scale" : "")} />
                </div>
                <div className="w-1/2 h-full flex">
                    <ScaledText text={awayJammerText} className={cn(jammerNameClassName, awayIsLead ? "animate-pulse-scale" : "")} />
                </div>
            </div>
            <div className="h-[60%] flex gap-5">
                <ScoreboardComponent className="w-1/2 h-full" header={`Period ${gameStage.periodNumber}`} headerClassName="text-3xl p-1">
                    <PeriodClock textClassName="flex justify-center items-center h-full m-2 overflow-hidden" autoScale />
                </ScoreboardComponent>
                <ScoreboardComponent className="w-1/2 h-full" header={`Jam ${gameStage.jamNumber}`} headerClassName="text-3xl p-1">
                    <JamClock textClassName="flex justify-center items-center h-full m-2 overflow-hidden" autoScale />
                </ScoreboardComponent>
            </div>
        </ClocksBar>
    );
}