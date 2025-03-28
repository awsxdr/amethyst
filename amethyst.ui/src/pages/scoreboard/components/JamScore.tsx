import { useJamStatsState, useTeamScoreState } from "@/hooks";
import { ScaledText } from "@components/ScaledText";
import { ScoreboardComponent } from "./ScoreboardComponent";
import { TeamSide } from "@/types";

import { cn } from "@/lib/utils";

type JamScoreProps = {
    side: TeamSide,
    textClassName?: string,
};

export const JamScore = ({ side, textClassName }: JamScoreProps) => {

    const { jamScore } = useTeamScoreState(side) ?? { jamScore: 0 };
    const { hasCompletedInitial } = useJamStatsState(side) ?? { hasCompletedInitial: false };
    
    return (
        <ScoreboardComponent className={cn("h-2/5 w-full p-1 font-bold", !hasCompletedInitial && "bg-gray-300")}>
            <ScaledText 
                text={jamScore.toString()} 
                className={cn("flex justify-center items-center h-full overflow-hidden", textClassName)} 
            />
        </ScoreboardComponent>
    );
}