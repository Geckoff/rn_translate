import "reflect-metadata";
import React, { useState } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import AppNavigator from "./navigation/AppNavigator";
import getStore from "./store/store";
import { Provider } from "react-redux";
import { Provider as PaperProvider } from "react-native-paper";

const store = getStore();

export default function App() {
    return (
        <Provider store={store}>
            <PaperProvider>
                <AppNavigator />
            </PaperProvider>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        padding: 10,
    },
});
