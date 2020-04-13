import { RadioBusinessLogicObject, Option } from "./useRadioBusinessLogic";
import { InputViewLogicObject, useInputViewLogic } from "../Input";
import { Theme } from "react-native-paper";

export type RadioViewLogicObject = InputViewLogicObject<string> & {
    options: Option[];
    onPress: (option: Option) => void;
    getIsChecked: (option: Option) => boolean;
    labelTextColor: string;
};

export const useRadioViewLogic = (bl: RadioBusinessLogicObject, theme: Theme): RadioViewLogicObject => {
    const onPress = (option: Option) => {
        bl.handleChange(option.value);
    };
    const getIsChecked = (option: Option) => option.value === bl.value;
    const labelTextColor = bl.isDisabled ? theme.colors.disabled : theme.colors.text;

    return {
        ...useInputViewLogic(bl),
        options: bl.options,
        onPress,
        getIsChecked,
        labelTextColor,
    };
};
