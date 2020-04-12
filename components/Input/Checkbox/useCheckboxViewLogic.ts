import { CheckboxBusinessLogicObject } from "./useCheckboxBusinessLogic";
import { InputViewLogicObject, useInputViewLogic } from "../Input";

export type CheckboxViewLogicObject = InputViewLogicObject<boolean> & {
    onPress: () => void;
    label: string;
};

export const useCheckboxViewLogic = (bl: CheckboxBusinessLogicObject): CheckboxViewLogicObject => {
    const onPress = () => {
        bl.handleChange(!bl.value);
    };

    return {
        ...useInputViewLogic(bl),
        onPress,
        label: bl.label,
    };
};
