import { useMemo } from "react";
import { TeamSide, TimeoutListItem, TimeoutType } from "@/types"
import { Switch } from "@/components/ui";
import { cn } from "@/lib/utils";

type ScoreSheetTimeoutRowProps = {
    timeout: TimeoutListItem;
    sheetSide: TeamSide;
    className?: string;
    onTimeoutRetentionChanged?: (retained: boolean) => void;
}

export const ScoreSheetTimeoutRow = ({ timeout, sheetSide, className, onTimeoutRetentionChanged }: ScoreSheetTimeoutRowProps) => {

    const timeoutName = useMemo(() => 
        timeout.type === TimeoutType.Official ? "Official time out"
        : timeout.type === TimeoutType.Team && timeout.side === sheetSide ? "Timeout this team"
        : timeout.type === TimeoutType.Team ? "Timeout other team"
        : timeout.type === TimeoutType.Review && timeout.side === sheetSide ? "Official review this team"
        : timeout.type === TimeoutType.Review ? "Official review other team"
        : "Untyped time out"
    , [timeout]);

    const formatTime = (totalSeconds: number) => {
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;

        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }

    const cellClass = "bg-purple-100 dark:bg-purple-800 border-b border-black dark:border-gray-400";

    return (
        <>
            <span className={cn(className, "col-start-2 border-l-2", cellClass)}></span>
            <span className={cn(className, "col-start-3 col-span-8", cellClass)}>{ timeoutName }</span>
            <span className={cn(className, "col-start-11 col-span-4", cellClass)}>{ timeout.durationInSeconds ? formatTime(timeout.durationInSeconds) : 'In progress' }</span>
            <span className={cn(className, "col-start-15 col-span-5 flex flex-nowrap gap-2", cellClass)}>
                { timeout.type === TimeoutType.Review && timeout.side === sheetSide && (
                    <>Retained <Switch checked={timeout.retained} onCheckedChange={onTimeoutRetentionChanged} /></>
                )}
            </span>
        </>
    )
}