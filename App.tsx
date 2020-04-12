import React, { useState } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import { TextInput, useTextInputBusinessLogic } from "./components/Input/TextInput";
import { Button } from "react-native-paper";
import { isAlphaValidator } from "./components/Input/helpers/validators";
import { Checkbox, useCheckboxBusinessLogic } from "./components/Input/Checkbox";
import { Radio, useRadioBusinessLogic } from "./components/Input/Radio";
import { Select, useSelectBusinessLogic } from "./components/Input/Select";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        text: "#212121",
    },
    fontSizes: {
        regular: 30,
    },
};

const useFormBusinessLogic = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [isGood, setIsGood] = useState(false);
    const [gender, setGender] = useState("");
    const [status, setStatus] = useState("");

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

    const isGoodCheckboxBl = useCheckboxBusinessLogic({
        value: isGood,
        setValue: setIsGood,
        label: "Good",
    });

    const genderRadioBl = useRadioBusinessLogic({
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
            { display: "Illegal", value: "illegal" },
            { display: "Citizen", value: "citizen" },
            { display: "Permanent Resident", value: "permres" },
        ],
    });

    const showNames = () => {
        Alert.alert(`${firstName} ${lastName}`);
    };

    const isButtonDisabled = () => firstName.length === 0 || lastName.length === 0;

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
    };
};

export default function App() {
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
    } = useFormBusinessLogic();

    return (
        <PaperProvider theme={theme}>
            <View style={styles.container}>
                <TextInput multiline={true} numberOfLines={3} businessLogic={firstNameBl} />
                <TextInput businessLogic={lastNameBl} />
                <Checkbox businessLogic={isGoodCheckboxBl} />

                <Radio businessLogic={genderRadioBl} />
                <Select businessLogic={statusSelectBl} />
                <Button icon="camera" mode="contained" onPress={showNames} disabled={isButtonDisabled()}>
                    Press me
                </Button>
                <View>
                    <Text>{firstName}</Text>
                    <Text>{lastName}</Text>
                    <Text>{isGood ? "good" : "not good"}</Text>
                    <Text>{gender}</Text>
                    <Text>{status}</Text>
                </View>
            </View>
        </PaperProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        padding: 10,
    },
});
