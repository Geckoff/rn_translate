import React from "react";
import { Text, View, Button, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator, DrawerItemList } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "./HeaderButton";

//const MyStack = createStackNavigator();

const AppNavigator = (props: any) => {
    return (
        <NavigationContainer>
            {/* <MyStack.Navigator>
                <MyStack.Screen name={"AddWord"} component={AddWordScreen} />
            </MyStack.Navigator> */}
            <TranslateNavigator />
        </NavigationContainer>
    );
};

const ListsStackNavigator = createStackNavigator();

const ListsNavigator = () => (
    <ListsStackNavigator.Navigator screenOptions={{ headerStyle: { backgroundColor: "#ccc" } }}>
        <ListsStackNavigator.Screen name="Lists" component={ListsScreen} options={listScreenOptions} />
        <ListsStackNavigator.Screen name="List" component={ListScreen} />
    </ListsStackNavigator.Navigator>
);

const TranslateDrawerNavigator = createDrawerNavigator();

const TranslateNavigator = () => {
    return (
        <TranslateDrawerNavigator.Navigator
            drawerContent={(props) => {
                return (
                    <View style={{ flex: 1, padding: 20 }}>
                        <SafeAreaView forceInset={{ top: "always", horizontal: "never" }}>
                            <DrawerItemList {...props} />
                            <Button
                                title="Logout"
                                color="green"
                                onPress={() => {
                                    // dispatch(authActions.logout());
                                    // props.navigation.navigate("Auth");
                                }}
                            />
                        </SafeAreaView>
                    </View>
                );
            }}
        >
            <TranslateDrawerNavigator.Screen
                name="ListsSection"
                component={ListsNavigator}
                options={{
                    drawerIcon: (props) => <Ionicons name={"md-list"} size={23} color={props.color} />,
                }}
            />
            <TranslateDrawerNavigator.Screen
                name="WordSection"
                component={AddWordScreen}
                options={{
                    drawerIcon: (props) => <Ionicons name={"md-list"} size={23} color={props.color} />,
                }}
            />
            <TranslateDrawerNavigator.Screen
                name="StatSection"
                component={StatisticsScreen}
                options={{
                    drawerIcon: (props) => <Ionicons name={"md-list"} size={23} color={props.color} />,
                }}
            />
        </TranslateDrawerNavigator.Navigator>
    );
};

export default AppNavigator;

const AddWordScreen = () => (
    <View>
        <Text>Add Word</Text>
    </View>
);
const EditWordScreen = () => (
    <View>
        <Text>Edit Word</Text>
    </View>
);
const ListsScreen = (props: any) => (
    <View>
        <Text>Lists</Text>
        <Button
            title="Go to list"
            onPress={() => {
                props.navigation.navigate("List");
            }}
        />
    </View>
);
const listScreenOptions = (navData: any) => {
    return {
        headerTitle: "All Lists",
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="Menu"
                    iconName="md-menu"
                    onPress={() => {
                        navData.navigation.toggleDrawer();
                    }}
                />
            </HeaderButtons>
        ),
    };
};

const ListScreen = (props: any) => (
    <View>
        <Text>Single List</Text>
        <Button
            title="Go to lists"
            onPress={() => {
                props.navigation.navigate("Lists");
            }}
        />
    </View>
);
const StatisticsScreen = () => (
    <View>
        <Text>Statistics</Text>
    </View>
);
