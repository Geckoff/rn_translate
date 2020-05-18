import React from "react";
import { useWordTranslationsViewLogic } from "./WordTranslationsViewLogic";
import { WordTranslationsBusinessLogicObject } from "./WordTranslationsBusinessLogic";
import { View, StyleSheet } from "react-native";
import { TextInput } from "@components/Input/TextInput";
import { Radio } from "@components/Input/Radio";
import { TranslationOption } from "@api/translate";
import { withTheme } from "react-native-paper";
import { ErrorCaption } from "@components/Input/ErrorCaption";
import { ThemedSFC } from "@styles/types";

export type WordTranslationsProps = {
    wordTranslationsBusinessLogic: WordTranslationsBusinessLogicObject;
};

export const WordTranslationsComponent: ThemedSFC<WordTranslationsProps> = ({
    theme,
    wordTranslationsBusinessLogic,
}) => {
    const {
        customTranslationTextInputBL,
        translationOptionsRadioBL,
        customTranslationError,
    } = useWordTranslationsViewLogic({ wordTranslationsBusinessLogic });

    return (
        <View style={styles.wordTranslations}>
            <Radio<TranslationOption> businessLogic={translationOptionsRadioBL} />
            <View style={styles.customTranslationWrapper}>
                <TextInput businessLogic={customTranslationTextInputBL} />
                <View style={styles.errorCaptionWrapper}>
                    <ErrorCaption>{customTranslationError}</ErrorCaption>
                </View>
            </View>
        </View>
    );
};

export const WordTranslations = withTheme(WordTranslationsComponent);

const styles = StyleSheet.create({
    customTranslationWrapper: {
        position: "absolute",
        bottom: -22,
        right: 0,
        width: "89.5%",
    },
    errorCaptionWrapper: {
        position: "absolute",
        bottom: -1,
    },
    wordTranslations: {
        position: "relative",
    },
});
