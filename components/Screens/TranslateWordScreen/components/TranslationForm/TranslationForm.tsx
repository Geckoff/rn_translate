import React from "react";
import { useTranslationFormViewLogic } from "./TranslationFormViewLogic";
import { Button } from "react-native-paper";
import { View, ScrollView } from "react-native";
import { TranslationFormBusinessLogicObject } from "./TranslationFormBusinessLogic";
import { Select } from "@components/Input/Select";
import { TextInput } from "@components/Input/TextInput";
import { ScreenView } from "@components/Helpers/ScreenView";

export type TranslationFormProps = {
    translationFormBusinessLogic: TranslationFormBusinessLogicObject;
};

export const TranslationForm: React.SFC<TranslationFormProps> = ({ translationFormBusinessLogic }: any) => {
    const {
        handleTranslateWord,
        isTranslateButtonDisabled,
        langFromSelectBL,
        langToSelectBL,
        wordToTranslateTextInputBL,
    } = useTranslationFormViewLogic(translationFormBusinessLogic);

    return (
        <ScreenView>
            <Select businessLogic={langFromSelectBL} />
            <Select businessLogic={langToSelectBL} />
            <TextInput businessLogic={wordToTranslateTextInputBL} />
            <Button disabled={isTranslateButtonDisabled} mode="contained" onPress={handleTranslateWord}>
                Translate Word
            </Button>
        </ScreenView>
    );
};
