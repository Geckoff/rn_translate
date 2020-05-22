import React from "react";
import { useTranslationOptionsViewLogic, useTranslationOptionBusinessLogic } from "./";
import { View, StyleSheet } from "react-native";
import { Button, withTheme } from "react-native-paper";
import { ThemedSFC } from "@styles/types";
import { WordTranslations, useWordTranslationsBusinessLogic } from "./WordTranslations";
import { useListsPickerBusinessLogic, ListsPicker } from "./ListsPicker";
import { WordTranslationsHeader } from "./WordTranslationsHeader";

export const TranslationOptionsComponent: ThemedSFC = ({ theme }) => {
    const listsPickerBusinessLogic = useListsPickerBusinessLogic();
    const wordTranslationsBusinessLogic = useWordTranslationsBusinessLogic();
    const translationOptionBusinessLogic = useTranslationOptionBusinessLogic({
        wordTranslationsBusinessLogic,
        listsPickerBusinessLogic,
    });
    const { handleAddWord, isAddButtonDisabled, langFrom, langTo, translatedWord } = useTranslationOptionsViewLogic({
        translationOptionBusinessLogic,
    });

    return (
        <View style={styles.translationOptions}>
            <View style={styles.translationOptionsWrapper}>
                <WordTranslationsHeader word={translatedWord} langFrom={langFrom} langTo={langTo} />
                <WordTranslations wordTranslationsBusinessLogic={wordTranslationsBusinessLogic} />
                <ListsPicker listsPickerBusinessLogic={listsPickerBusinessLogic} />
            </View>
            <Button disabled={isAddButtonDisabled} mode="contained" onPress={handleAddWord}>
                Add Word
            </Button>
        </View>
    );
};

export const TranslationOptions = withTheme(TranslationOptionsComponent);

const styles = StyleSheet.create({
    translationOptions: {
        marginBottom: 20,
        marginTop: 15,
    },
    translationOptionsWrapper: {
        marginBottom: 15,
    },
});
