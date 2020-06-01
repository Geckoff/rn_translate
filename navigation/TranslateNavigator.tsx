import React from "react";
import { Text, StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { AddWordNavigator } from "./AddWordNavigator/AddWordNavigator";
import { withTheme } from "react-native-paper";
import { ThemedSFC } from "@styles/types";
import { appStyles } from "@styles/styles";

const TranslateDrawerNavigator = createDrawerNavigator();

export const TranslateNavigatorComponent: ThemedSFC = ({ theme }) => {
    const propStyles = StyleSheet.create({
        drawerStyle: {
            backgroundColor: theme.colors.primary,
        },
    });

    return (
        <TranslateDrawerNavigator.Navigator
            drawerContentOptions={{
                inactiveTintColor: appStyles.fonts.colors.drawerFontColor,
                activeTintColor: appStyles.fonts.colors.drawerFontColor,
            }}
            drawerStyle={propStyles.drawerStyle}
        >
            <TranslateDrawerNavigator.Screen
                name="WordSection"
                component={AddWordNavigator}
                options={{
                    drawerIcon: (props) => (
                        <MaterialIcons
                            name={"translate"}
                            size={appStyles.fonts.sizes.drawerIconSize}
                            color={props.color}
                        />
                    ),
                    title: "Add Word",
                }}
            />
            <TranslateDrawerNavigator.Screen
                name="ListsSection"
                component={ListsSection}
                options={{
                    drawerIcon: (props) => (
                        <Ionicons name={"md-list"} size={appStyles.fonts.sizes.drawerIconSize} color={props.color} />
                    ),
                }}
            />
            <TranslateDrawerNavigator.Screen
                name="StatSection"
                component={StatSection}
                options={{
                    drawerIcon: (props) => (
                        <Ionicons name={"md-list"} size={appStyles.fonts.sizes.drawerIconSize} color={props.color} />
                    ),
                }}
            />
        </TranslateDrawerNavigator.Navigator>
    );
};

export const TranslateNavigator = withTheme(TranslateNavigatorComponent);

const ListsSection = () => {
    return <Text>ListsSection</Text>;
};

const StatSection = () => {
    return <Text>StatSection</Text>;
};
