import React from "react";
import { useTranslateWordScreenViewLogic } from "./TranslateWordScreenViewLogic";
import { Button } from "react-native-paper";
import { View } from "react-native";

export const TranslateWordScreen = () => {
    const { handleTranslateWord, handleResetWord } = useTranslateWordScreenViewLogic();

    return (
        <View style={{ marginTop: 30 }}>
            <Button mode="contained" onPress={handleTranslateWord}>
                Translate Word
            </Button>
            <Button mode="contained" onPress={handleResetWord}>
                Reset Word
            </Button>
        </View>
    );
};
