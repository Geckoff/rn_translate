import React, { useState } from "react";
import { Error } from "@components/Helpers/Error";
import AppNavigator from "@navigation/AppNavigator/AppNavigator";
import { Provider as PaperProvider, Snackbar, Button } from "react-native-paper";
import { Loading } from "@components/Helpers/Loading";
import { WatchConntectionInitiator } from "@components/Helpers/WatchConnectionInitiator";
import { useAppStartupViewLogic } from "./AppStartupViewLogic";
import TranslateTheme from "@styles/TranslateTheme";
import { Notification } from "@components/Helpers/Notification";

export const AppStartup = () => {
    const { shouldLoadNavigator } = useAppStartupViewLogic();

    return (
        <PaperProvider theme={TranslateTheme}>
            <WatchConntectionInitiator />
            <Loading />
            <Error />
            {shouldLoadNavigator && <AppNavigator />}
            <Notification />
        </PaperProvider>
    );
};
