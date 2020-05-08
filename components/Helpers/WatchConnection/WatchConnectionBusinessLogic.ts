import { getIsOnline } from "@store/reducers";
import { IsOnline } from "@store/reducers/network";
import { useSelector, useDispatch } from "react-redux";
import { refreshNetworkListener } from "@store/actions/network";

export type WatchConnectionBusinessLogic = {
    isOnline: IsOnline;
    dispatchRefreshNetworkListener: () => void;
};

export const useWatchConnectionBusinessLogic = (): WatchConnectionBusinessLogic => {
    const isOnline = useSelector(getIsOnline);
    const dispatch = useDispatch();

    const dispatchRefreshNetworkListener = () => {
        dispatch(refreshNetworkListener());
    };

    return {
        isOnline,
        dispatchRefreshNetworkListener,
    };
};
