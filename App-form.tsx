import "reflect-metadata";
import React, { useState } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import { TextInput, useTextInputBusinessLogic } from "./components/Input/TextInput";
import { Button } from "react-native-paper";
import { isAlphaValidator } from "./components/Input/helpers/validators";
import { Checkbox, useCheckboxBusinessLogic } from "./components/Input/Checkbox";
import { Radio, useRadioBusinessLogic } from "./components/Input/Radio";
import { Select, useSelectBusinessLogic } from "./components/Input/Select";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { useConnection } from "./Db";
import { Author } from "./author";
import { Provider } from "react-redux";
import getStore from "./store/store";
import { useSelector, useDispatch } from "react-redux";
import { getWords } from "./store/reducers";
import { translateWord } from "./store/actions";

const store = getStore({});

const useFormBusinessLogic = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [wordToTranslate, setWordToTranslate] = useState("");
    const [isGood, setIsGood] = useState(false);
    const [gender, setGender] = useState("");
    const [status, setStatus] = useState("");
    const [authors, setAuthors] = useState([]);
    const words = useSelector(getWords);
    const dispatch = useDispatch();

    const firstNameBl = useTextInputBusinessLogic({
        value: firstName,
        label: "First Name",
        setValue: setFirstName,
        isRequired: true,
        validators: [isAlphaValidator],
    });

    const lastNameBl = useTextInputBusinessLogic({
        value: lastName,
        label: "Last Name",
        setValue: setLastName,
        isRequired: true,
    });

    const wordToTranslateBl = useTextInputBusinessLogic({
        value: wordToTranslate,
        label: "Word to Translate",
        setValue: setWordToTranslate,
    });

    const isGoodCheckboxBl = useCheckboxBusinessLogic({
        value: isGood,
        setValue: setIsGood,
        label: "Good",
        isDisabled: true,
    });

    const genderRadioBl = useRadioBusinessLogic({
        value: gender,
        setValue: setGender,
        options: [
            { display: "Male", value: "male" },
            { display: "Female", value: "female" },
            { display: "N/A", value: "na" },
        ],
        isDisabled: true,
    });

    const statusSelectBl = useSelectBusinessLogic({
        label: "Status",
        value: status,
        setValue: setStatus,
        options: [
            { label: "Illegal", value: "illegal" },
            { label: "Citizen", value: "citizen" },
            { label: "Permanent Resident", value: "permres" },
        ],
        isDisabled: true,
    });

    const getAuthors = async () => {
        const authors = await Author.find({ select: ["firstName", "lastName"] });
        setAuthors(authors as any);
    };

    const postAuthor = async () => {
        const author = new Author();
        author.firstName = firstName;
        author.lastName = lastName;
        await author.save();
    };

    const showNames = () => {
        Alert.alert(`${firstName} ${lastName}`);
    };

    const isButtonDisabled = () => firstName.length === 0 || lastName.length === 0;

    const translateAction = () => {
        dispatch(translateWord(wordToTranslate));
    };

    return {
        firstName,
        lastName,
        firstNameBl,
        lastNameBl,
        showNames,
        isButtonDisabled,
        isGoodCheckboxBl,
        genderRadioBl,
        statusSelectBl,
        isGood,
        gender,
        status,
        getAuthors,
        postAuthor,
        authors,
        words,
        wordToTranslate,
        wordToTranslateBl,
        translateAction,
    };
};

export const AppInner = () => {
    const {
        firstNameBl,
        lastNameBl,
        firstName,
        lastName,
        showNames,
        isButtonDisabled,
        isGoodCheckboxBl,
        genderRadioBl,
        statusSelectBl,
        isGood,
        gender,
        status,
        getAuthors,
        postAuthor,
        authors,
        words,
        wordToTranslateBl,
        translateAction,
    } = useFormBusinessLogic();

    useConnection();

    return (
        <PaperProvider>
            <View style={styles.container}>
                <TextInput businessLogic={firstNameBl} />
                <TextInput businessLogic={lastNameBl} />
                {/*<Checkbox businessLogic={isGoodCheckboxBl} />

                <Radio businessLogic={genderRadioBl} />
                <Select businessLogic={statusSelectBl} />*/}
                <Button mode="contained" onPress={postAuthor} disabled={isButtonDisabled()}>
                    Post Author
                </Button>
                <Button mode="contained" onPress={getAuthors}>
                    Show Authors
                </Button>
                <View>
                    {authors.map((author: any, i) => (
                        <Text key={i}>
                            {author.firstName} {author.lastName}
                        </Text>
                    ))}
                </View>
                {/*<View>
                    <Text>{firstName}</Text>
                    <Text>{lastName}</Text>
                    <Text>{isGood ? "good" : "not good"}</Text>
                    <Text>{gender}</Text>
                    <Text>{status}</Text>
                </View>*/}
            </View>
            <View style={{ marginTop: 30 }}>
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
