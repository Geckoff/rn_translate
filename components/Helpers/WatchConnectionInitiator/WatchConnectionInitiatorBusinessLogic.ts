import { useDispatch } from "react-redux";
import { networkOffline, networkCheckData } from "@store/actions/network";

export type WatchConnectionInitiatorBusinessLogicObject = {
    setOnline: () => void;
    setOffline: () => void;
};

export const useWatchConnectionInitiatorBusinessLogic = (): WatchConnectionInitiatorBusinessLogicObject => {
    const dispatch = useDispatch();

    const setOnline = () => {
        dispatch(networkCheckData());
    };

    const setOffline = () => {
        dispatch(networkOffline());
    };

    return {
        setOnline,
        setOffline,
    };
};
