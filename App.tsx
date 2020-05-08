import "reflect-metadata";
import React, { useState } from "react";
import { Error } from "@components/Helpers/Error";
import AppNavigator from "./navigation/AppNavigator";
import getStore from "./store/store";
import { Provider } from "react-redux";
import { Provider as PaperProvider } from "react-native-paper";
import { Loading } from "@components/Helpers/Loading";
import { WatchConntectionInitiator } from "@components/Helpers/WatchConnectionInitiator";

const store = getStore();

export default function App() {
    return (
        <Provider store={store}>
            <PaperProvider>
                <WatchConntectionInitiator />
                <Loading />
                <Error />
                <AppNavigator />
            </PaperProvider>
        </Provider>
    );
}
