import React, { useCallback, useMemo } from "react";
import { View, Text } from "react-native";
import { TextInput as PaperTextInput } from "react-native-paper";
import { TextInputViewLogicObject } from "./useTextInputViewLogic";
import { TextInputBusinessLogicObject } from "./useTextInputBusinessLogic";
import { useTextInputViewLogic } from "./useTextInputViewLogic";
import { withTheme, Theme, Caption } from "react-native-paper";

export type TextInputProps = {
    businessLogic: TextInputBusinessLogicObject;
    theme: Theme;
};

export const TextInputComponent: React.SFC<TextInputProps> = ({ businessLogic, theme, ...props }) => {
    // const { onFocus, onBlur, errorMessage, isInvalid, onChange, label, value } = useMemo(
    //     () => useTextInputViewLogic(businessLogic),
    //     [businessLogic]
    // );
    const { onFocus, onBlur, errorMessage, isInvalid, onChange, label, value } = useTextInputViewLogic(businessLogic);
    return (
        <View>
            <PaperTextInput
                error={isInvalid}
                label={label}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                onFocus={onFocus}
                mode="outlined"
                {...props}
            />
            {isInvalid && <Caption style={{ color: theme.colors.error }}>{errorMessage}</Caption>}
        </View>
    );
};

export const TextInput = withTheme(TextInputComponent);
