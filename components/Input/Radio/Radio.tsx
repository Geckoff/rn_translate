import * as React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { useRadioViewLogic } from "./useRadioViewLogic";
import { RadioBusinessLogicObject } from "./useRadioBusinessLogic";
import { withTheme, Theme } from "react-native-paper";
import { RadioButton } from "material-bread";
import { appStyles } from "@styles/styles";

export type RadioProps = {
    businessLogic: RadioBusinessLogicObject;
    theme: Theme;
};

export const RadioComponent: React.SFC<RadioProps> = ({ businessLogic, theme, ...props }) => {
    const { options, onPress, getIsChecked, isDisabled, labelTextColor } = useRadioViewLogic(businessLogic, theme);

    const styles = StyleSheet.create({
        label: {
            fontSize: appStyles.fonts.sizes.regular,
            color: labelTextColor,
        },
        disablingBlock: appStyles.styleBlocks.disablingBlock as ViewStyle,
        radio: {
            opacity: 0.26,
        },
    });

    return (
        <View>
            {options.map((option, i) => (
                <View key={i}>
                    {isDisabled && <View style={styles.disablingBlock}></View>}
                    <RadioButton
                        checked={getIsChecked(option)}
                        onPress={onPress.bind(null, option)}
                        label={option.display}
                        labelStyle={styles.label}
                        radioButtonColor={theme.colors.primary}
                        disabled={isDisabled}
                        {...props}
                    />
                </View>
            ))}
        </View>
    );
};

export const Radio = withTheme(RadioComponent);
