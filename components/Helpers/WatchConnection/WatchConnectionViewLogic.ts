import { useWatchConnectionBusinessLogic } from "./WatchConnectionBusinessLogic";

export type WatchConnectionViewLogic = {
    shouldShowMessage: boolean;
    handleRefresh: () => void;
};

export const useWatchConnectionViewLogic = () => {
    const { isOnline, dispatchRefreshNetworkListener } = useWatchConnectionBusinessLogic();

    const shouldShowMessage = !isOnline;

    const handleRefresh = () => {
        dispatchRefreshNetworkListener();
    };

    return {
        shouldShowMessage,
        handleRefresh,
    };
};
