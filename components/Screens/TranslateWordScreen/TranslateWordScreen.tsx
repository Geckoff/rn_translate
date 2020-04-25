import React from "react";
import { useTranslateWordScreenViewLogic } from "./TranslateWordScreenViewLogic";
import { View } from "react-native";
import { TranslationForm } from "./components/TranslationForm";

export const TranslateWordScreen = () => {
    const { translationFormBusinessLogic } = useTranslateWordScreenViewLogic();

    return (
        <View style={{ marginTop: 30 }}>
            <TranslationForm translationFormBusinessLogic={translationFormBusinessLogic} />
        </View>
    );
};
