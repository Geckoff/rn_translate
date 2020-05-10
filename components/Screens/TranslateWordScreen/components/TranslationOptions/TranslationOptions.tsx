import React from "react";
import { useTranslationOptionsViewLogic } from "./TranslationOptionsViewLogic";
import { View, StyleSheet, ScrollView } from "react-native";
import { TextInput } from "@components/Input/TextInput";
import { Radio } from "@components/Input/Radio";
import { TranslationOption } from "@api/translate";
import { Button } from "react-native-paper";

export const TranslationOptions = () => {
    const { customTranslationTextInputBL, translationOptionsRadioBL, getDataToSave } = useTranslationOptionsViewLogic();

    return (
        <View style={styles.translationOptions}>
            <View>
                <Radio<TranslationOption> businessLogic={translationOptionsRadioBL} />
                <View style={styles.customTranslationWrapper}>
                    <TextInput businessLogic={customTranslationTextInputBL} />
                </View>
            </View>
            <Button disabled={false} mode="contained" onPress={getDataToSave}>
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
    },
});
