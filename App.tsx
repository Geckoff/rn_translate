import React, { useState } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import { TextInput, useTextInputBusinessLogic } from "./components/Input/TextInput";
import { Button } from "react-native-paper";
import { isAlphaValidator } from "./components/Input/helpers/validators";
import { Checkbox, useCheckboxBusinessLogic } from "./components/Input/Checkbox";
import { Radio, useRadioBusinessLogic } from "./components/Input/Radio";

const useFormBusinessLogic = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [isGood, setIsGood] = useState(false);

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
    } = useFormBusinessLogic();

    return (
        <View style={styles.container}>
            <TextInput businessLogic={firstNameBl} />
            <TextInput businessLogic={lastNameBl} />
            <Checkbox businessLogic={isGoodCheckboxBl} />
            <Text>
                {firstName} {lastName}
            </Text>
            <Button icon="camera" mode="contained" onPress={showNames} disabled={isButtonDisabled()}>
                Press me
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
    },
});
