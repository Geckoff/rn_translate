import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { TranslateNavigator } from "../TranslateNavigator";
import { useAppNavigatorViewLogic } from "./AppNavigatorViewLogic";

const AppNavigator = () => {
    const { shouldShowNavigation } = useAppNavigatorViewLogic();

    return <NavigationContainer>{shouldShowNavigation && <TranslateNavigator />}</NavigationContainer>;
};

export default AppNavigator;
