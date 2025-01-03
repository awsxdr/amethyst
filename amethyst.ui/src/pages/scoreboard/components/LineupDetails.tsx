import { LineupClock, PeriodClock } from "@/components/clocks"
import { ScoreboardComponent } from "./ScoreboardComponent"
import { GameStageState } from "@/types"
import { ClocksBar } from "./ClocksBar";

type LineupDetailsProps = {
    gameStage: GameStageState;
    visible: boolean;
}

export const LineupDetails = ({ gameStage, visible }: LineupDetailsProps) => {
    return (
        <ClocksBar visible={visible} className="gap-5 flex-col">
            <div className="h-[40%] flex">
            </div>
            <div className="h-[60%] flex gap-5">
                <ScoreboardComponent className="w-1/2 h-full" header={`Period ${gameStage.periodNumber}`}>
                    <PeriodClock textClassName="flex justify-center items-center h-full m-2 overflow-hidden" autoScale />
                </ScoreboardComponent>
                <ScoreboardComponent className="w-1/2 h-full" header={`Lineup (Jam ${gameStage.jamNumber + 1})`}>
                    <LineupClock textClassName="flex justify-center items-center h-full m-2 overflow-hidden" autoScale />
                </ScoreboardComponent>
            </div>
        </ClocksBar>
    );
}