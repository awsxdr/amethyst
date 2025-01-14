import { MobileSidebarTrigger } from "@/components/MobileSidebarTrigger";
import { GameStateContextProvider, useI18n } from "@/hooks";
import { useNavigate, useParams } from "react-router-dom";
import { EditBreadcrumbs } from "./components/EditBreadcrumbs";
import { GameTeams } from "./components/GameTeams";

export const GameEdit = () => {

    const { gameId } = useParams();
    const navigate = useNavigate();
    const { translate } = useI18n();

    if(!gameId) {
        navigate('/teams');
        return (<></>);
    }

    return (
        <>
            <title>{translate("GameEdit.Title")} | {translate("Main.Title")}</title>
            <GameStateContextProvider gameId={gameId}>
                <>
                    <div className="flex items-center mt-2">
                        <MobileSidebarTrigger className="mx-5" />
                        <EditBreadcrumbs gameId={gameId} />
                    </div>
                    <div className="flex flex-col p-4 gap-2 w-full">
                        <GameTeams gameId={gameId} />
                    </div>
                </>
            </GameStateContextProvider>
        </>
    );
}