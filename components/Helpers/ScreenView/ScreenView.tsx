import React from "react";
import { ScrollView } from "react-native";
import { StyleSheet } from "react-native";

export const ScreenView: React.SFC = ({ children }) => {
    return <ScrollView style={styles.screenView}>{children}</ScrollView>;
};

const styles = StyleSheet.create({
    screenView: {
        marginHorizontal: 15,
    },
});
