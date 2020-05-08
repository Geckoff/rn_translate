import React from "react";
import { useTranslateWordScreenViewLogic } from "./TranslateWordScreenViewLogic";
import { View, StyleSheet, ScrollView, ScrollViewBase } from "react-native";
import { TranslationForm } from "./components/TranslationForm";
import { WatchConnection } from "@components/Helpers/WatchConnection";

export const TranslateWordScreen = () => {
    const { translationFormBusinessLogic } = useTranslateWordScreenViewLogic();

    return (
        <View style={styles.wordScreen}>
            <WatchConnection message="You need Internet connection to translate a word" />
            <ScrollView>
                <TranslationForm translationFormBusinessLogic={translationFormBusinessLogic} />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    wordScreen: {
        width: "100%",
        height: "100%",
    },
});
