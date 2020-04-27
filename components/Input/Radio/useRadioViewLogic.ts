import { RadioBusinessLogicObject, Option } from "./useRadioBusinessLogic";
import { InputViewLogicObject, useInputViewLogic } from "../Input";
import { Theme } from "react-native-paper";

export type RadioViewLogicObject<TValue> = InputViewLogicObject<TValue> & {
    options: Option<TValue>[];
    onPress: (option: Option<TValue>) => void;
    getIsChecked: (option: Option<TValue>) => boolean;
    labelTextColor: string;
};

export const useRadioViewLogic = <TValue>(
    bl: RadioBusinessLogicObject<TValue>,
    theme: Theme
): RadioViewLogicObject<TValue> => {
    const onPress = (option: Option<TValue>) => {
        bl.handleChange(option.value);
    };
    const getIsChecked = (option: Option<TValue>) => option.value === bl.value;
    const labelTextColor = bl.isDisabled ? theme.colors.disabled : theme.colors.text;

    return {
        ...useInputViewLogic(bl),
        options: bl.options,
        onPress,
        getIsChecked,
        labelTextColor,
    };
};
