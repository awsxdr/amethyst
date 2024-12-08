import { RadioButtonGroup } from "@/components/RadioButtonGroup";
import { useJamLineupState } from "@/hooks";
import { TeamSide } from "@/types";
import { SkaterPosition } from "@/types/events/JamLineup";

type TeamLineupProps = {
    side: TeamSide;
    onLineupSelected?: (position: SkaterPosition, number: string | null) => void;
    disabled?: boolean;
}

export const TeamLineup = ({ side, onLineupSelected, disabled }: TeamLineupProps) => {
    const skaterNumbers = ["0", "01", "123", "17", "29", "404", "49", "52", "77", "89" ];

    const lineup = useJamLineupState(side);

    return (
        <>
            <div className="flex justify-center items-center self-center">
                <div className="flex flex-col items-end">
                    <div className="flex flex-wrap justify-center items-center gap-2 pt-5 pb-1 items-baseline">
                        <span className={disabled ? "opacity-50" : ""}>Jammer</span>
                        <RadioButtonGroup
                            items={[{value: null, name: "?"}, ...skaterNumbers.map(s => ({ value: s, name: s}))]}
                            value={lineup?.jammerNumber}
                            rowClassName="gap-0.5"
                            size="sm"
                            disabled={disabled}
                            onItemSelected={v => onLineupSelected?.(SkaterPosition.Jammer, v)}
                        />
                    </div>
                    <div className="flex flex-wrap justify-center items-center gap-2 pb-5 items-baseline">
                        <span className={disabled ? "opacity-50" : ""}>Pivot</span>
                        <RadioButtonGroup
                            items={[{value: null, name: "?"}, ...skaterNumbers.map(s => ({ value: s, name: s}))]}
                            value={lineup?.pivotNumber}
                            rowClassName="gap-0.5"
                            size="sm"
                            disabled={disabled}
                            onItemSelected={v => onLineupSelected?.(SkaterPosition.Pivot, v)}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}