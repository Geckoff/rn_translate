import * as React from "react";
import { View, StyleSheet } from "react-native";
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
    const styles = StyleSheet.create({
        label: {
            fontSize: appStyles.fonts.sizes.regular,
        },
    });

    const { options, onPress, getIsChecked } = useRadioViewLogic(businessLogic);

    return (
        <View>
            {options.map((option, i) => (
                <RadioButton
                    key={i}
                    checked={getIsChecked(option)}
                    onPress={onPress.bind(null, option)}
                    label={option.display}
                    labelStyle={styles.label}
                    radioButtonColor={theme.colors.primary}
                    {...props}
                />
            ))}
        </View>
    );
};

export const Radio = withTheme(RadioComponent);
