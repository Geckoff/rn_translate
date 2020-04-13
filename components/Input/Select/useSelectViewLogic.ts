import { SelectBusinessLogicObject, Option } from "./useSelectBusinessLogic";
import { InputViewLogicObject, useInputViewLogic } from "../Input";
import { Theme } from "react-native-paper";

export type SelectViewLogicObject = InputViewLogicObject<string> & {
    options: Option[];
    label: string;
    textColor: string;
    borderColor: string;
};

const dummyOption: Option = {
    label: "Select...",
    value: "",
};

export const useSelectViewLogic = (bl: SelectBusinessLogicObject, theme: Theme): SelectViewLogicObject => {
    const inputViewLogic = useInputViewLogic(bl);
    const options = [{ ...dummyOption, color: theme.colors.placeholder }, ...bl.options];
    const textColor = bl.isDisabled
        ? theme.colors.disabled
        : bl.value === dummyOption.value
        ? theme.colors.placeholder
        : theme.colors.text;
    const borderColor = bl.isDisabled ? theme.colors.disabled : theme.colors.placeholder;

    return {
        ...inputViewLogic,
        options,
        label: bl.label,
        textColor,
        borderColor,
    };
};
