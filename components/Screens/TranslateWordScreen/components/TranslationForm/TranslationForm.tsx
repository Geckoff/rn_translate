import React from "react";
import { useTranslationFormViewLogic } from "./TranslationFormViewLogic";
import { Button } from "react-native-paper";
import { View, StyleSheet, Text } from "react-native";
import { Select } from "@components/Input/Select";
import { TextInput } from "@components/Input/TextInput";
import { withTheme } from "react-native-paper";
import { ThemedSFC } from "@styles/types";
import { Label } from "@components/Input/Label";
import { ErrorCaption } from "@components/Input/ErrorCaption";

export const TranslationFormComponent: ThemedSFC = ({ theme }) => {
    const {
        handleTranslateWord,
        isTranslateButtonDisabled,
        langFromSelectBL,
        langToSelectBL,
        wordToTranslateTextInputBL,
        languagePairErr,
    } = useTranslationFormViewLogic();

    return (
        <>
            <View style={styles.translateFromWrapper}>
                <Label>Translate From:</Label>
                <Select businessLogic={langFromSelectBL} />
            </View>
            <View>
                <Label>Translate To:</Label>
                <Select businessLogic={langToSelectBL} />
            </View>
            <ErrorCaption>{languagePairErr}</ErrorCaption>
            <TextInput businessLogic={wordToTranslateTextInputBL} />
            <Button disabled={isTranslateButtonDisabled} mode="contained" onPress={handleTranslateWord}>
                Translate Word
            </Button>
        </>
    );
};

const styles = StyleSheet.create({
    translateFromWrapper: {
        marginBottom: 5,
    },
});

export const TranslationForm = withTheme(TranslationFormComponent);
