import { CheckboxBusinessLogicObject } from "./useCheckboxBusinessLogic";
import { InputViewLogicObject, useInputViewLogic } from "../Input";

export type CheckboxViewLogicObject = InputViewLogicObject<boolean> & {
    status: "checked" | "unchecked";
    onPress: () => void;
};

export const useCheckboxViewLogic = (bl: CheckboxBusinessLogicObject): CheckboxViewLogicObject => {
    const status = bl.value ? "checked" : "unchecked";
    const onPress = () => {
        bl.handleChange(!bl.value);
    };

    return {
        ...useInputViewLogic(bl),
        isValid: bl.isValid,
        status,
        onPress,
    };
};
