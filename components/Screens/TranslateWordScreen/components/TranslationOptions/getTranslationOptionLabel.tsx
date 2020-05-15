import React from "react";
import { Caption, Text } from "react-native-paper";
import { ThemedSFC } from "@styles/types";
import { withTheme } from "react-native-paper";
import { TranslationOption } from "@api/translate";

export type TranslationOptionLabelProps = {
    translationOption: TranslationOption;
};

export const TranslationOptionLabelComponent: ThemedSFC<TranslationOptionLabelProps> = ({ translationOption }) => {
    return (
        <Text>
            {translationOption.text} <Caption>{translationOption.pos}</Caption>
        </Text>
    );
};

export const TranslationOptionLabel = withTheme(TranslationOptionLabelComponent);

export const getTranslationOptionLabel = (translationOption: TranslationOption) => (
    <TranslationOptionLabel translationOption={translationOption} />
);
