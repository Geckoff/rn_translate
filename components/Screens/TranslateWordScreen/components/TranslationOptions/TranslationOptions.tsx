import React from "react";
import { useTranslationOptionsViewLogic } from "./TranslationOptionsViewLogic";
import { View, StyleSheet, ScrollView } from "react-native";
import { TextInput } from "@components/Input/TextInput";
import { Radio } from "@components/Input/Radio";
import { TranslationOption } from "@api/translate";
import { Button, Title, Headline, Subheading, Caption, withTheme } from "react-native-paper";
import { ErrorCaption } from "@components/Input/ErrorCaption";
import { Ionicons } from "@expo/vector-icons";
import { ThemedSFC } from "@styles/types";

export const TranslationOptionsComponent: ThemedSFC = ({ theme }) => {
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

export const TranslationOptions = withTheme(TranslationOptionsComponent);

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
    translationDirection: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: -12,
    },
    translationDirectionArrow: {
        marginTop: 4,
    },
});
