import React from "react";
import { View, StyleSheet } from "react-native";
import { TextInput as PaperTextInput } from "react-native-paper";
import { TextInputBusinessLogicObject } from "./useTextInputBusinessLogic";
import { useTextInputViewLogic } from "./useTextInputViewLogic";
import { withTheme, Theme, Caption } from "react-native-paper";

export type TextInputProps = {
    businessLogic: TextInputBusinessLogicObject;
    theme: Theme;
};

export const TextInputComponent: React.SFC<TextInputProps> = ({ businessLogic, theme, ...props }) => {
    const { onFocus, onBlur, errorMessage, isInvalid, onChange, label, value } = useTextInputViewLogic(businessLogic);

    return (
        <View>
            <PaperTextInput
                style={styles.textInput}
                error={isInvalid}
                label={label}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                onFocus={onFocus}
                mode="outlined"
                {...props}
            />
            <View style={styles.errorWrapper}>
                {isInvalid && <Caption style={{ color: theme.colors.error }}>{errorMessage}</Caption>}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    errorWrapper: {
        height: 21,
    },
    textInput: {
        height: 40,
    },
});

export const TextInput = withTheme(TextInputComponent);
