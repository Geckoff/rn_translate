import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { TranslateWordScreen } from "@components/Screens/TranslateWordScreen";
import { getTtranslateWordScreenOptions } from "@components/Helpers/ScreenOptions";
import { ThemedSFC } from "@styles/types";
import { StackWithScreenOptions } from "../Helpers/StackWithScreenOptions";

const AddWordStackNavigator = createStackNavigator();

export const AddWordNavigator: ThemedSFC = () => {
    return (
        <StackWithScreenOptions
            render={(screenOptions) => (
                <AddWordStackNavigator.Navigator screenOptions={screenOptions}>
                    <AddWordStackNavigator.Screen
                        name="AddWord"
                        component={TranslateWordScreen}
                        options={getTtranslateWordScreenOptions("Add Word")}
                    />
                </AddWordStackNavigator.Navigator>
            )}
        />
    );
};
