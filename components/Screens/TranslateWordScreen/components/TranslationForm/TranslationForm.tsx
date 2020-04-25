import React from "react";
import { useTranslationFormScreenViewLogic } from "./TranslationFormViewLogic";
import { Button } from "react-native-paper";
import { View } from "react-native";

export const TranslationForm = ({ translationFormBusinessLogic }: any) => {
    const { handleTranslateWord, handleResetWord } = useTranslationFormScreenViewLogic(translationFormBusinessLogic);

    return (
        <View style={{ marginTop: 30 }}>
            <Button mode="contained" onPress={handleTranslateWord}>
                Translate Word
            </Button>
            <Button mode="contained" onPress={handleResetWord}>
                Reset Word
            </Button>
        </View>
    );
};
