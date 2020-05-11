import React from "react";
import { useTranslationOptionsViewLogic } from "./TranslationOptionsViewLogic";
import { View, StyleSheet, ScrollView } from "react-native";
import { TextInput } from "@components/Input/TextInput";
import { Radio } from "@components/Input/Radio";
import { TranslationOption } from "@api/translate";
import { Button, Title, Headline, Subheading, Caption } from "react-native-paper";
import { ErrorCaption } from "@components/Input/ErrorCaption";

export const TranslationOptions = () => {
    const {
        customTranslationTextInputBL,
        translationOptionsRadioBL,
        getDataToSave,
        customTranslationError,
        isAddButtonDisabled,
        langFrom,
        langTo,
        translatedWord,
    } = useTranslationOptionsViewLogic();

    return (
        <View style={styles.translationOptions}>
            <View style={styles.radioOptionsWrapper}>
                <Headline>{translatedWord}</Headline>
                <Subheading>
                    {langFrom} -> {langTo}
                </Subheading>
                <Radio<TranslationOption> businessLogic={translationOptionsRadioBL} />
                <View style={styles.customTranslationWrapper}>
                    <TextInput businessLogic={customTranslationTextInputBL} />
                    <View style={styles.errorCaptionWrapper}>
                        <ErrorCaption>{customTranslationError}</ErrorCaption>
                    </View>
                </View>
            </View>
            <Button disabled={isAddButtonDisabled} mode="contained" onPress={getDataToSave}>
                Add Word
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    customTranslationWrapper: {
        position: "absolute",
        bottom: -22,
        right: 0,
        width: "89.5%",
    },
    translationOptions: {
        marginBottom: 10,
        marginTop: 10,
    },
    radioOptionsWrapper: {
        marginBottom: 25,
    },
    errorCaptionWrapper: {
        position: "absolute",
        bottom: -1,
    },
});
