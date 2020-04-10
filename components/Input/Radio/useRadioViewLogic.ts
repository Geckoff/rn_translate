import { RadioBusinessLogicObject, Option } from "./useRadioBusinessLogic";
import { InputViewLogicObject, useInputViewLogic } from "../Input";

export type RadioViewLogicObject = InputViewLogicObject<string> & {
    options: Option[];
    getStatus: (currentOption: Option) => "checked" | "unchecked";
    onPress: (currentOption: Option) => void;
};

export const useRadioViewLogic = (bl: RadioBusinessLogicObject): RadioViewLogicObject => {
    const getStatus = (currentOption: Option) =>
        bl.options.some((option) => currentOption.value === option.value) ? "checked" : "unchecked";

    const onPress = (currentOption: Option) => {
        bl.handleChange(currentOption.value);
    };

    return {
        ...useInputViewLogic(bl),
        isValid: bl.isValid,
        options: bl.options,
        getStatus,
        onPress,
    };
};
