import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { TranslateNavigator } from "./TranslateNavigator";

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <TranslateNavigator />
        </NavigationContainer>
    );
};

export default AppNavigator;
