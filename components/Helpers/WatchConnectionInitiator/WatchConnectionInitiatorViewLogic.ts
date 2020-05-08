import { useWatchConnectionInitiatorBusinessLogic } from "./WatchConnectionInitiatorBusinessLogic";
import { useEffect } from "react";
import NetInfo from "@react-native-community/netinfo";

export const useWatchConnectionInitiatorViewLogic = () => {
    const { setOffline, setOnline } = useWatchConnectionInitiatorBusinessLogic();

    useEffect(() => {
        NetInfo.addEventListener((state) => {
            if (state.isConnected) {
                setOnline();
            } else {
                setOffline();
            }
        });
    }, []);
};
