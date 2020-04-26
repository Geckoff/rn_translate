import React from "react";
import { useTranslateWordScreenViewLogic } from "./TranslateWordScreenViewLogic";
import { View } from "react-native";
import { TranslationForm } from "./components/TranslationForm";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { CustomHeaderButton } from "@components/Helpers/CustomHeaderButton";

export const TranslateWordScreen = () => {
    const { translationFormBusinessLogic } = useTranslateWordScreenViewLogic();

    return (
        <View style={{ marginTop: 30 }}>
            <TranslationForm translationFormBusinessLogic={translationFormBusinessLogic} />
        </View>
    );
};

export const translateWordScreenOptions = (navData: any) => {
    return {
        headerTitle: "Add Word",
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
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
