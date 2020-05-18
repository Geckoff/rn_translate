import React from "react";
import { Caption, Text } from "react-native-paper";
import { ThemedSFC } from "@styles/types";
import { withTheme } from "react-native-paper";
import { TranslationOption } from "@api/translate";

export type WordTranslationsLabelProps = {
    translationOption: TranslationOption;
};

export const WordTranslationsLabelComponent: ThemedSFC<WordTranslationsLabelProps> = ({ translationOption }) => {
    return (
        <Text>
            {translationOption.text} <Caption>{translationOption.pos}</Caption>
        </Text>
    );
};

export const WordTranslationsLabel = withTheme(WordTranslationsLabelComponent);

export const getWordTranslationsLabel = (translationOption: TranslationOption) => (
    <WordTranslationsLabel translationOption={translationOption} />
);
