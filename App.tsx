import "reflect-metadata";
import React from "react";
import getStore from "./store/store";
import { Provider } from "react-redux";
import { AppStartup } from "@components/AppStartup";

const store = getStore();

export default function App() {
    return (
        <Provider store={store}>
            <AppStartup />
        </Provider>
    );
}
