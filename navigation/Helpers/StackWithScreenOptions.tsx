import React from "react";
import { ThemedSFC } from "@styles/types";
import { StyleSheet } from "react-native";
import { withTheme } from "react-native-paper";
import { appStyles } from "@styles/styles";
import { StackNavigationOptions } from "@react-navigation/stack";

type StackWithScreenOptionsComponentProps = {
    render: (screenOptions: StackNavigationOptions) => JSX.Element;
};

export const StackWithScreenOptionsComponent: ThemedSFC<StackWithScreenOptionsComponentProps> = ({ render, theme }) => {
    const propStyles = StyleSheet.create({
        headerStackNav: { backgroundColor: theme.colors.primary },
    });

    const screenOptions = {
        headerLeftContainerStyle: { marginLeft: 7 },
        headerStyle: propStyles.headerStackNav,
        headerTintColor: appStyles.fonts.colors.drawerFontColor,
    };

    return <>{render(screenOptions)}</>;
};

export const StackWithScreenOptions = withTheme(StackWithScreenOptionsComponent);
