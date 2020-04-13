import * as React from "react";
import { View, StyleSheet, Platform, Text } from "react-native";
import { useSelectViewLogic } from "./useSelectViewLogic";
import { SelectBusinessLogicObject } from "./useSelectBusinessLogic";
import { withTheme, Theme } from "react-native-paper";
import { appStyles } from "@styles/styles";
import RNPickerSelect from "react-native-picker-select";
import { Ionicons } from "@expo/vector-icons";

export type SelectProps = {
    businessLogic: SelectBusinessLogicObject;
    theme: Theme;
};

export const SelectComponent: React.SFC<SelectProps> = ({ businessLogic, theme, ...props }) => {
    const { options, value, onChange, textColor, isDisabled, onBlur, borderColor } = useSelectViewLogic(
        businessLogic,
        theme
    );

    const paddingVertical = 8;
    const paddingHorizontal = 10;
    const borderRadius = 5;
    const borderWidth = 1.2;
    const height = 43;
    const platformStyles = {
        paddingRight: 30,
        color: textColor,
        paddingHorizontal: paddingHorizontal,
        paddingVertical: paddingVertical,
        fontSize: appStyles.fonts.sizes.regular,
        borderWidth,
        borderColor: borderColor,
        borderRadius,
        height: height,
    };

    const pickerSelectStyles = StyleSheet.create({
        inputIOS: platformStyles,
        inputAndroid: platformStyles,
        iconContainer: {
            top: 10,
            right: 12,
        },
    });

    return (
        <View>
            <RNPickerSelect
                placeholder={{}}
                useNativeAndroidPickerStyle={false}
                onOpen={onBlur}
                style={pickerSelectStyles}
                items={options}
                value={value}
                onValueChange={onChange}
                disabled={isDisabled}
                Icon={() => {
                    return <Ionicons name="md-arrow-dropdown" size={24} color={borderColor} />;
                }}
                {...props}
            />
        </View>
    );
};

export const Select = withTheme(SelectComponent);
