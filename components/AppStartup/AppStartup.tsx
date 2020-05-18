import React from "react";
import { Error } from "@components/Helpers/Error";
import AppNavigator from "@navigation/AppNavigator/AppNavigator";
import { Provider as PaperProvider } from "react-native-paper";
import { Loading } from "@components/Helpers/Loading";
import { WatchConntectionInitiator } from "@components/Helpers/WatchConnectionInitiator";
import { useAppStartupViewLogic } from "./AppStartupViewLogic";

export const AppStartup = () => {
    const { shouldLoadNavigator } = useAppStartupViewLogic();

    return (
        <PaperProvider>
            <WatchConntectionInitiator />
            <Loading />
            <Error />
            {shouldLoadNavigator && <AppNavigator />}
        </PaperProvider>
    );
};
