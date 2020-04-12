import * as React from "react";
import { View, StyleSheet } from "react-native";
import { CheckboxBusinessLogicObject } from "./useCheckboxBusinessLogic";
import { useCheckboxViewLogic } from "./useCheckboxViewLogic";
import { withTheme, Theme } from "react-native-paper";
import { Checkbox as BreadCheckbox } from "material-bread";
import { appStyles } from "@styles/styles";

export type CheckboxProps = {
    businessLogic: CheckboxBusinessLogicObject;
    theme: Theme;
};

export const CheckboxComponent: React.SFC<CheckboxProps> = ({ businessLogic, theme, ...props }) => {
    const styles = StyleSheet.create({
        label: {
            color: theme.colors.text,
            fontSize: appStyles.fonts.sizes.regular,
        },
    });

    const { value, onPress, label } = useCheckboxViewLogic(businessLogic);

    return (
        <View>
            <BreadCheckbox
                checkboxColor={theme.colors.primary}
                checked={value}
                onPress={onPress}
                label={label}
                labelStyle={styles.label}
                size={28}
                {...props}
            />
        </View>
    );
};

export const Checkbox = withTheme(CheckboxComponent);
