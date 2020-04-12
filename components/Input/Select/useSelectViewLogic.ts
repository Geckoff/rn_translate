import { SelectBusinessLogicObject, Option } from "./useSelectBusinessLogic";
import { InputViewLogicObject, useInputViewLogic } from "../Input";

export type DropdownOption = {
    value: string;
};

export type SelectViewLogicObject = InputViewLogicObject<string> & {
    ddOptions: DropdownOption[];
    label: string;
    onChangeText: (displayValue: string) => void;
    displayValue: string;
};

export const useSelectViewLogic = (bl: SelectBusinessLogicObject): SelectViewLogicObject => {
    const ddOptions = bl.options.map((option) => ({ value: option.display }));

    const displayValue = bl.options.find((option) => option.value === bl.value)?.display || "";

    const onChangeText = (displayValue: string) => {
        const selectedOption = bl.options.find((option) => option.display === displayValue);
        bl.handleChange(selectedOption!.value);
    };

    return {
        ...useInputViewLogic(bl),
        ddOptions,
        label: bl.label,
        onChangeText,
        displayValue,
    };
};
