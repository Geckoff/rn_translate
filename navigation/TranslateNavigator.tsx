import React from "react";
import { Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { AddWordNavigator } from "./AddWordNavigator";

const TranslateDrawerNavigator = createDrawerNavigator();

export const TranslateNavigator = () => {
    return (
        <TranslateDrawerNavigator.Navigator>
            <TranslateDrawerNavigator.Screen
                name="WordSection"
                component={AddWordNavigator}
                options={{
                    drawerIcon: (props) => <Ionicons name={"md-list"} size={23} color={props.color} />,
                }}
            />
            <TranslateDrawerNavigator.Screen
                name="ListsSection"
                component={() => <Text>ListsSection</Text>}
                options={{
                    drawerIcon: (props) => <Ionicons name={"md-list"} size={23} color={props.color} />,
                }}
            />
            <TranslateDrawerNavigator.Screen
                name="StatSection"
                component={() => <Text>StatSection</Text>}
                options={{
                    drawerIcon: (props) => <Ionicons name={"md-list"} size={23} color={props.color} />,
                }}
            />
        </TranslateDrawerNavigator.Navigator>
    );
};
