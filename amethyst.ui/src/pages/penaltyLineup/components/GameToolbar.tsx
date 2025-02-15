import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react"
import { MobileSidebarTrigger } from "@/components";
import { Button, useSidebar } from "@/components/ui"
import { cn } from "@/lib/utils";
import { GameInfo } from "@/types";
import { GameSelectMenu, ViewMenu } from "."

type GameToolbarProps = {
    games: GameInfo[];
    currentGame?: GameInfo;
    selectedGameId?: string;
    onSelectedGameIdChanged: (gameId: string) => void;
    disabled?: boolean;
}

export const GameToolbar = ({ games, currentGame, selectedGameId, onSelectedGameIdChanged, disabled }: GameToolbarProps) => {

    const { isMobile } = useSidebar();
    const [showGameSelect, setShowGameSelect] = useState(true);

    return (
        <div className="flex flex-wrap flex-col justify-center md:flex-row md:flex-nowrap w-full gap-2.5 p-2">
            { isMobile &&
                <div className="flex grow justify-between">
                    <MobileSidebarTrigger />
                    <div className="flex grow justify-end gap-2">
                        <ViewMenu disabled={disabled} />
                        <Button variant="ghost" className="inline" disabled={disabled} onClick={() => setShowGameSelect(v => !v)}>
                            { showGameSelect ? <ChevronUp /> : <ChevronDown /> }
                        </Button>
                    </div>
                </div>
            }
            { (!isMobile || showGameSelect) &&
                <>
                    <div className={cn("flex flex-wrap w-full justify-center bg-card gap-2", isMobile && "flex-nowrap")}>
                        <GameSelectMenu 
                            games={games} 
                            currentGame={currentGame} 
                            selectedGameId={selectedGameId} 
                            onSelectedGameIdChanged={onSelectedGameIdChanged} 
                            disabled={disabled}
                        />
                    </div>
                    { !isMobile &&
                        <div className="flex justify-end gap-2">
                            <ViewMenu disabled={disabled} />
                        </div>
                    }
                </>
            }
        </div>
    )
}