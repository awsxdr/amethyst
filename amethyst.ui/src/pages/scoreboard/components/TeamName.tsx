import { useConfiguration, useTeamDetailsState } from "@/hooks";
import { ScaledText } from "../../../components/ScaledText";
import { useMemo } from "react";
import { DisplayConfiguration, TeamSide } from "@/types";
import { cn } from "@/lib/utils";

type TeamScoreProps = {
    side: TeamSide,
    textClassName?: string,
};

export const TeamName = ({ side, textClassName }: TeamScoreProps) => {

    const team = useTeamDetailsState(side);

    const teamName = useMemo(() => {
        if(!team) {
            return '';
        }

        return team.team.names['scoreboard'] || team.team.names['team'] || team.team.names['league'] || team.team.names['color'] || (side === TeamSide.Home ? 'Home' : 'Away');
    }, [team]);

    const { configuration } = useConfiguration<DisplayConfiguration>("DisplayConfiguration");

    const foreground = useMemo(
        () => configuration?.useTextBackgrounds ? (team?.team.color.complementaryColor ?? '#ffffff') : ("#ffffff"),
        [team, configuration?.useTextBackgrounds]);

    const background = useMemo(
        () => configuration?.useTextBackgrounds ? (team?.team.color.shirtColor ?? '#000000') : ('rgba(0,0,0,0)'),
        [team, configuration?.useTextBackgrounds]);

    return (
        <div 
            className={cn("flex justify-center h-full overflow-hidden rounded-md sm:rounded-lg md:rounded-xl xl:rounded-3xl p-1")}
            style={{ color: foreground, backgroundColor: background }}
        >
            <ScaledText 
                text={teamName || ''} 
                className={cn(
                    "flex flex-col justify-center text-center font-bold w-full h-full overflow-show",
                    textClassName
                )} 
            />
        </div>
    );
}