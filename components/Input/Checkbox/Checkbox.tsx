import * as React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
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
    const { value, onPress, label, isDisabled, labelTextColor } = useCheckboxViewLogic(businessLogic, theme);

    const styles = StyleSheet.create({
        label: {
            color: labelTextColor,
            fontSize: appStyles.fonts.sizes.regular,
        },
        disablingBlock: appStyles.styleBlocks.disablingBlock as ViewStyle,
    });

    return (
        <View>
            {isDisabled && <View style={styles.disablingBlock}></View>}
            <BreadCheckbox
                checkboxColor={theme.colors.primary}
                checked={value}
                onPress={onPress}
                label={label}
                labelStyle={styles.label}
                size={28}
                disabled={isDisabled}
                {...props}
            />
        </View>
    );
};

export const Checkbox = withTheme(CheckboxComponent);
