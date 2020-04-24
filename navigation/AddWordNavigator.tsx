import React from "react";
import { Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { TranslateWordScreen } from "@components/Screens/TranslateWordScreen";

const AddWordStackNavigator = createStackNavigator();

export const AddWordNavigator = () => (
    <AddWordStackNavigator.Navigator screenOptions={{ headerStyle: { backgroundColor: "#ccc" } }}>
        <AddWordStackNavigator.Screen name="AddWord" component={TranslateWordScreen} />
    </AddWordStackNavigator.Navigator>
);
