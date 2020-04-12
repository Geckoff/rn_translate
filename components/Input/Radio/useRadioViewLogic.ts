import { RadioBusinessLogicObject, Option } from "./useRadioBusinessLogic";
import { InputViewLogicObject, useInputViewLogic } from "../Input";

export type RadioViewLogicObject = InputViewLogicObject<string> & {
    options: Option[];
    onPress: (option: Option) => void;
    getIsChecked: (option: Option) => boolean;
};

export const useRadioViewLogic = (bl: RadioBusinessLogicObject): RadioViewLogicObject => {
    const onPress = (option: Option) => {
        bl.handleChange(option.value);
    };

    const getIsChecked = (option: Option) => option.value === bl.value;

    return {
        ...useInputViewLogic(bl),
        options: bl.options,
        onPress,
        getIsChecked,
    };
};
