import { JamClockState } from "@/types";
import { Clock, ClockProps } from "./Clock";

type JamClockProps = Omit<ClockProps<JamClockState>, "secondsMapper" | "stateName" | "direction" | "startValue">;

export const JamClock = (props: JamClockProps) => (
    <Clock<JamClockState> secondsMapper={s => s.secondsPassed} stateName="JamClockState" direction="down" startValue={120} {...props} />
);
