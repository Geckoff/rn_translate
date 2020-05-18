import React from "react";
import { useTranslationOptionsViewLogic, useTranslationOptionBusinessLogic } from "./";
import { View, StyleSheet } from "react-native";
import { Button, Headline, Subheading, withTheme } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { ThemedSFC } from "@styles/types";
import { WordTranslations, useWordTranslationsBusinessLogic } from "./WordTranslations";
import { useListsPickerBusinessLogic, ListsPicker } from "./ListsPicker";

export const TranslationOptionsComponent: ThemedSFC = ({ theme }) => {
    const listsPickerBusinessLogic = useListsPickerBusinessLogic();
    const wordTranslationsBusinessLogic = useWordTranslationsBusinessLogic();
    const translationOptionBusinessLogic = useTranslationOptionBusinessLogic({ wordTranslationsBusinessLogic });
    const { getDataToSave, isAddButtonDisabled, langFrom, langTo, translatedWord } = useTranslationOptionsViewLogic({
        translationOptionBusinessLogic,
    });

    const propStyles = StyleSheet.create({
        translationDirectionLangs: {
            color: theme.colors.placeholder,
        },
    });

    return (
        <View style={styles.translationOptions}>
            <View style={styles.radioOptionsWrapper}>
                <Headline>{translatedWord}</Headline>
                <View style={styles.translationDirection}>
                    <Subheading style={propStyles.translationDirectionLangs}>{langFrom} </Subheading>
                    <View>
                        <Ionicons
                            style={styles.translationDirectionArrow}
                            name="ios-arrow-round-forward"
                            size={27}
                            color={theme.colors.placeholder}
                        />
                    </View>
                    <Subheading style={propStyles.translationDirectionLangs}> {langTo}</Subheading>
                </View>
                <WordTranslations wordTranslationsBusinessLogic={wordTranslationsBusinessLogic} />
                <ListsPicker listsPickerBusinessLogic={listsPickerBusinessLogic} />
            </View>
            <Button disabled={isAddButtonDisabled} mode="contained" onPress={getDataToSave}>
                Add Word
            </Button>
        </View>
    );
};

export const TranslationOptions = withTheme(TranslationOptionsComponent);

const styles = StyleSheet.create({
    translationOptions: {
        marginBottom: 10,
        marginTop: 10,
    },
    radioOptionsWrapper: {
        marginBottom: 25,
    },
    translationDirection: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: -12,
    },
    translationDirectionArrow: {
        marginTop: 4,
    },
});
