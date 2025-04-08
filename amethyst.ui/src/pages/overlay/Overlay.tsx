import { CSSProperties, PropsWithChildren, useEffect, useMemo, useState } from "react";
import { ScoreRow } from "./components/ScoreRow";
import { DEFAULT_OVERLAY_CONFIGURATION, OverlayConfiguration, TeamSide } from "@/types";
import { GameStateContextProvider, I18nContextProvider, useConfiguration, useCurrentGame, useI18n } from "@/hooks";
import { useSearchParams } from "react-router-dom";
import { Clock } from "./components/Clock";
import { LineupRow } from "./components/LineupRow";
import languages from '@/i18n';

type OverlayContextProps = {
    gameId: string;
}

const OverlayContext = ({ children, gameId }: PropsWithChildren<OverlayContextProps>) => (
    <I18nContextProvider usageKey="overlay" defaultLanguage='en' languages={languages}>
        <GameStateContextProvider gameId={gameId}>
            {children}
        </GameStateContextProvider>
    </I18nContextProvider>
)

const OverlayContent = () => {

    const { translate, setLanguage } = useI18n();

    const { configuration, isConfigurationLoaded } = useConfiguration<OverlayConfiguration>("OverlayConfiguration");

    const { language, scale } = configuration ?? DEFAULT_OVERLAY_CONFIGURATION;

    useEffect(() => {
        if(!isConfigurationLoaded) {
            return;
        }

        setLanguage(language);
    }, [language]);

    const style = {
        '--score-row-width': `${25 * scale}vw`,
        '--score-row-height': `${3 * scale}vh`,
        '--score-row-top': `${2 * scale}vh`,
        '--score-row-left': `${2 * scale}vw`,
        '--score-row-text-size': `${1.5 * scale}vh`,
        '--clock-top': `${2 * scale}vh`,
        '--clock-left': `${100 - 12 * scale}vw`,
        '--clock-width': `${10 * scale}vw`,
        '--clock-height': `${10 * scale}vh`,
        '--clock-header-text-size': `${1.5 * scale}vh`,
        '--clock-header-height': `${2 * scale}vh`,
        '--main-clock-height': `${3 * scale}vh`,
        '--main-clock-text-size': `${2.5 * scale}vh`,
        '--period-clock-height': `${2.5 * scale}vh`,
        '--period-clock-text-size': `${1.75 * scale}vh`,
        '--clock-footer-height': `${2.5 * scale}vh`,
        '--clock-footer-text-size': `${1.25 * scale}vh`,
        '--intermission-clock-height': `${5 * scale}vh`,
        '--intermission-clock-text-size': `${2 * scale}vh`,
        '--post-game-height': `${2 * scale}vh`,
        '--post-game-text-size': `${1.5 * scale}vh`,
        '--lineup-row-width': `${36 * scale}vw`,
        '--lineup-row-height': `${3 * scale}vh`,
        '--lineup-row-top': `${2 * scale}vh`,
        '--lineup-row-left': `${26 * scale}vw`,
        '--lineup-row-text-size': `${1.5 * scale}vh`,
        '--lineup-jammer-name-width': `${20 * scale}vw`,
        '--lineup-skater-width': `${4 * scale}vw`,
        '--star-height': `${2 * scale}vh`,
        '--background-fill-color': configuration?.backgroundColor ?? '#00ff00',
    } as CSSProperties;

    return (
        <div style={style}>
            <title>{translate("Overlay.Title")} | {translate("Main.Title")}</title>
            { configuration?.useBackground && (
                <div className="absolute left-0 top-0 right-0 bottom-0 bg-[--background-fill-color]">
                </div>
            )}
            <div className="h-0 w-0 relative select-none">
                <LineupRow side={TeamSide.Home} />
                <ScoreRow side={TeamSide.Home} />
                <LineupRow side={TeamSide.Away} />
                <ScoreRow side={TeamSide.Away} />
                <Clock />
            </div>
        </div>
    );
}

export const Overlay = () => {

    const [ searchParams, setSearchParams ] = useSearchParams();
    const { currentGame } = useCurrentGame();
    const [selectedGameId, setSelectedGameId] = useState<string | undefined>(searchParams.get('gameId') ?? '');

    const gameId = useMemo(() => selectedGameId === "current" ? currentGame?.id : selectedGameId, [selectedGameId, currentGame]);

    useEffect(() => {
        if (!selectedGameId && currentGame) {
            searchParams.set('gameId', "current");
            setSearchParams(searchParams);
            setSelectedGameId(currentGame.id);
        }
    }, [currentGame, selectedGameId]);

    useEffect(() => {
        if(currentGame && searchParams.get("gameId") === "current") {
            setSelectedGameId(currentGame.id);
        }
    }, [currentGame, searchParams]);

    if(!gameId) {
        return (<></>);
    }

    return (
        <OverlayContext gameId={gameId}>
            <OverlayContent />
        </OverlayContext>
    )
}