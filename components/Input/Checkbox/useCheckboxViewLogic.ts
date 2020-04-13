import { CheckboxBusinessLogicObject } from "./useCheckboxBusinessLogic";
import { InputViewLogicObject, useInputViewLogic } from "../Input";
import { Theme } from "react-native-paper";

export type CheckboxViewLogicObject = InputViewLogicObject<boolean> & {
    onPress: () => void;
    label: string;
    labelTextColor: string;
};

export const useCheckboxViewLogic = (bl: CheckboxBusinessLogicObject, theme: Theme): CheckboxViewLogicObject => {
    const onPress = () => {
        bl.handleChange(!bl.value);
    };

    const labelTextColor = bl.isDisabled ? theme.colors.disabled : theme.colors.text;

    return {
        ...useInputViewLogic(bl),
        onPress,
        label: bl.label,
        labelTextColor,
    };
};
