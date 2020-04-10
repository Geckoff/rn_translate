import * as React from "react";
import { View } from "react-native";
import { RadioButton as PaperRadio, Text } from "react-native-paper";
import { RadioBusinessLogicObject } from "./useRadioBusinessLogic";
import { useRadioViewLogic } from "./useRadioViewLogic";
import { withTheme, Theme } from "react-native-paper";

export type RadioProps = {
    businessLogic: RadioBusinessLogicObject;
    theme: Theme;
};

export const RadioComponent: React.SFC<RadioProps> = ({ businessLogic, ...props }) => {
    const { onPress, isValid, getStatus, options } = useRadioViewLogic(businessLogic);

    return (
        <View>
            {options.map((option) => (
                <View>
                    <Text>{option.display}</Text>
                    <PaperRadio.Android
                        value={option.value}
                        status={getStatus(option)}
                        onPress={onPress.bind(null, option)}
                    />
                </View>
            ))}
        </View>
    );
};

export const Radio = withTheme(RadioComponent);
