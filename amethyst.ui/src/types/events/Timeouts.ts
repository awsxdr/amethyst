import { EventWithBody, EventWithoutBody } from "@/hooks/EventsApiHook";
import { TeamSide } from "../TeamSide";

export class TimeoutTypeSet extends EventWithBody {
    constructor(body: TimeoutTypeSetBody) {
        super("TimeoutTypeSet", body);
    }
}
type TimeoutTypeSetBody = {
    type: "Untyped" | "Team" | "Review" | "Official";
    side?: TeamSide;
}

export class TimeoutStarted extends EventWithoutBody {
    constructor() {
        super("TimeoutStarted");
    }
}

export class TimeoutEnded extends EventWithoutBody {
    constructor() {
        super("TimeoutEnded");
    }
}

export class TeamReviewRetained extends EventWithBody {
    constructor(side: TeamSide, timeoutEventId: string) {
        super("TeamReviewRetained", { side, timeoutEventId });
    }
}

export class TeamReviewLost extends EventWithBody {
    constructor(side: TeamSide, timeoutEventId: string) {
        super("TeamReviewLost", { side, timeoutEventId });
    }
}