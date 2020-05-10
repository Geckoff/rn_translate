import React from "react";
import { useTranslateWordScreenViewLogic } from "./TranslateWordScreenViewLogic";
import { View, StyleSheet, ScrollView } from "react-native";
import { TranslationForm } from "./components/TranslationForm";
import { WatchConnection } from "@components/Helpers/WatchConnection";
import { TranslationOptions } from "./components/TranslationOptions";
import { appStyles } from "@styles/styles";
import { ScreenView } from "@components/Helpers/ScreenView";

export const TranslateWordScreen = () => {
    const { shouldLoadTranslationOptions } = useTranslateWordScreenViewLogic();

    return (
        <View style={styles.wordScreen}>
            <WatchConnection message="You need Internet connection to translate a word" />
            <ScrollView>
                <ScreenView>
                    <TranslationForm />
                    {shouldLoadTranslationOptions && <TranslationOptions />}
                </ScreenView>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    wordScreen: {
        width: "100%",
        height: "100%",
        backgroundColor: appStyles.screens.backgroundColor,
    },
});
