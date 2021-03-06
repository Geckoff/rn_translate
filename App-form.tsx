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
import getStore from "./store/store";
import NetInfo from "@react-native-community/netinfo";

const useFormBusinessLogic = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [wordToTranslate, setWordToTranslate] = useState("");
    const [isGood, setIsGood] = useState(false);
    const [gender, setGender] = useState("");
    const [status, setStatus] = useState("");
    const [authors, setAuthors] = useState([]);
    const unsubscribe = NetInfo.addEventListener((state) => {
        console.log("Connection type", state.type);
        console.log("Is connected?", state.isConnected);
    });

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

    const genderRadioBl = useRadioBusinessLogic<string>({
        value: gender,
        setValue: setGender,
        options: [
            { display: "Male", value: "male" },
            { display: "Female", value: "female" },
            { display: "N/A", value: "na" },
        ],
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

    return {
        firstName,
        lastName,
        firstNameBl,
        lastNameBl,
        showNames,
        isGoodCheckboxBl,
        genderRadioBl,
        statusSelectBl,
        isGood,
        gender,
        status,
        getAuthors,
        postAuthor,
        authors,
        wordToTranslate,
        wordToTranslateBl,
    };
};

export const AppInner = () => {
    const {
        firstNameBl,
        lastNameBl,
        firstName,
        lastName,
        showNames,
        isGoodCheckboxBl,
        genderRadioBl,
        statusSelectBl,
        isGood,
        gender,
        status,
        getAuthors,
        postAuthor,
        authors,
        wordToTranslateBl,
    } = useFormBusinessLogic();

    useConnection();

    return (
        <PaperProvider>
            <View style={styles.container}>
                <TextInput businessLogic={firstNameBl} />
                <TextInput businessLogic={lastNameBl} />
                <Checkbox businessLogic={isGoodCheckboxBl} />

                <Radio businessLogic={genderRadioBl} />
                <Select businessLogic={statusSelectBl} />
                {/* <Button mode="contained" onPress={postAuthor} disabled={isButtonDisabled()}>
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
                </View> */}
                {/*<View>
                    <Text>{firstName}</Text>
                    <Text>{lastName}</Text>
                    <Text>{isGood ? "good" : "not good"}</Text>
                    <Text>{gender}</Text>
                    <Text>{status}</Text>
                </View>*/}
            </View>
            {/* <View style={{ marginTop: 30 }}>
                <TextInput businessLogic={wordToTranslateBl} />
                <Button mode="contained" onPress={translateAction}>
                    Translate Word
                </Button>
            </View> */}
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
    return <AppInner />;
}
