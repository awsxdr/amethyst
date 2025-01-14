import { TeamSide } from "@/types";
import { TeamName } from "./TeamName";

import { TeamTimeouts } from "./TeamTimeouts";
import { TeamScore } from "./TeamScore";
import { JamScore } from "./JamScore";
import { cn } from "@/lib/utils";
import { ScaledText } from "@/components/ScaledText";
import { useJamStatsState } from "@/hooks";

type TeamDetailsProps = {
    side: TeamSide
}

export const TeamDetails = ({ side }: TeamDetailsProps) => {

    const { starPass } = useJamStatsState(side) ?? { starPass: false };

    return (
        <div className="flex flex-col grow w-1/2 gap-1 md:gap-3 lg:gap-5">
            <div className="h-[40%]">
                <TeamName side={side} />
            </div>
            <div className={cn("flex h-[calc(60%-1.4rem)] gap-1 md:gap-2 xl:gap-5", side === TeamSide.Home ? "flex-row" : "flex-row-reverse")}>
                <TeamTimeouts side={side} />
                <TeamScore side={side} />
                <div className="flex flex-col w-1/6 justify-between">
                    <JamScore side={side} />
                    <div className="text-white h-2/5">
                        <ScaledText 
                            text={starPass ? "SP" : ""}
                            className={cn("flex justify-center items-center h-full overflow-hidden")} 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}