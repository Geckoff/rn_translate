import React from "react";
import { View, StyleSheet } from "react-native";
import { TextInput as PaperTextInput } from "react-native-paper";
import { TextInputBusinessLogicObject } from "./useTextInputBusinessLogic";
import { useTextInputViewLogic } from "./useTextInputViewLogic";
import { withTheme, Theme, Caption } from "react-native-paper";
import { TextInputProps as PaperTextInputProps } from "react-native-paper/src/components/TextInput/TextInput";
import { appStyles } from "@styles/styles";

export type TextInputProps = PaperTextInputProps & {
    businessLogic: TextInputBusinessLogicObject;
    theme: Theme;
};

export const TextInputComponent: React.SFC<TextInputProps> = ({ businessLogic, theme, ...props }) => {
    const styles = StyleSheet.create({
        errorWrapper: {
            height: 21,
        },
        textInput: {
            backgroundColor: "#fff",
            color: theme.colors.text,
            borderColor: theme.colors.text,
            fontSize: appStyles.fonts.sizes.regular,
        },
        caption: { color: theme.colors.error },
    });

    const { onFocus, onBlur, errorMessage, isInvalid, onChange, label, value, isDisabled } = useTextInputViewLogic(
        businessLogic
    );

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
                dense={true}
                disabled={isDisabled}
                mode="outlined"
                {...props}
            />
            <View style={styles.errorWrapper}>
                {isInvalid && <Caption style={styles.caption}>{errorMessage}</Caption>}
            </View>
        </View>
    );
};

export const TextInput = withTheme(TextInputComponent);
