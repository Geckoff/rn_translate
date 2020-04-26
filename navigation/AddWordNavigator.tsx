import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { TranslateWordScreen } from "@components/Screens/TranslateWordScreen";
import { translateWordScreenOptions } from "@components/Screens/TranslateWordScreen";
import { withTheme } from "react-native-paper";
import { ThemedSFC } from "@styles/types";
import { StackWithScreenOptions } from "./Helpers/StackWithScreenOptions";

const AddWordStackNavigator = createStackNavigator();

export const AddWordNavigatorComponent: ThemedSFC = ({ theme }) => {
    return (
        <StackWithScreenOptions
            render={(screenOptions) => (
                <AddWordStackNavigator.Navigator screenOptions={screenOptions}>
                    <AddWordStackNavigator.Screen
                        name="AddWord"
                        component={TranslateWordScreen}
                        options={translateWordScreenOptions}
                    />
                </AddWordStackNavigator.Navigator>
            )}
        />
    );
};

export const AddWordNavigator = withTheme(AddWordNavigatorComponent);
