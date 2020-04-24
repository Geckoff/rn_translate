import "reflect-metadata";
import React, { useState } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import { TextInput, useTextInputBusinessLogic } from "./components/Input/TextInput";
import { Button } from "react-native-paper";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { useConnection } from "./Db";
import { Provider } from "react-redux";
import getStore from "./store/store";
import { useSelector, useDispatch } from "react-redux";
import { getWords } from "./store/reducers";
import { translateWord } from "./store/actions";
import { List, Setting, Word } from "./db/entities";

const store = getStore({});

const useFormBusinessLogic = () => {
    const [wordToTranslate, setWordToTranslate] = useState("");
    const words = useSelector(getWords);
    const dispatch = useDispatch();

    const wordToTranslateBl = useTextInputBusinessLogic({
        value: wordToTranslate,
        label: "Word to Translate",
        setValue: setWordToTranslate,
    });

    const translateAction = () => {
        dispatch(translateWord(wordToTranslate));
    };

    // const getAuthors = async () => {
    //     const authors = await Author.find({ select: ["firstName", "lastName"] });
    //     setAuthors(authors as any);
    // };

    const postWord = async () => {
        const list = await List.findOne(1);
        const word = new Word();
        word.word = "check";
        word.primaryTranslation = { text: "проверка", pos: "noun" };
        word.langFrom = "en";
        word.langTo = "ru";
        word.lists = [list!];

        await word.save();
    };

    return {
        words,
        wordToTranslate,
        wordToTranslateBl,
        translateAction,
        postWord,
    };
};

export const AppInner = () => {
    const { words, wordToTranslateBl, translateAction, postWord } = useFormBusinessLogic();

    useConnection();

    return (
        <PaperProvider>
            {/* <View style={{ marginTop: 30 }}>
                <TextInput businessLogic={wordToTranslateBl} />
                <Button mode="contained" onPress={translateAction}>
                    Translate Word
                </Button>
            </View>
            <View>
                <Text>WORDS</Text>
                {words.map((word: string, i: number) => (
                    <Text key={i}>{word}</Text>
                ))}
            </View> */}
            <View style={{ marginTop: 30 }}>
                <TextInput businessLogic={wordToTranslateBl} />
                <Button mode="contained" onPress={postWord}>
                    Post Word
                </Button>
            </View>
        </PaperProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        padding: 10,
    },
});

export default function App() {
    return (
        <Provider store={store}>
            <AppInner />
        </Provider>
    );
}
