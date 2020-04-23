import "reflect-metadata";
import React, { useState } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import AppNavigator from "./navigation/test/AppNavigator";

export default function App() {
    return <AppNavigator />;
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        padding: 10,
    },
});
