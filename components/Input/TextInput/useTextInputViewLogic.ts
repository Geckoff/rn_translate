import { TextInputBusinessLogicObject } from "./useTextInputBusinessLogic";
import { InputViewLogicObject, useInputViewLogic } from "../Input";

export type TextInputViewLogicObject = InputViewLogicObject<string> & {
    label: string;
};

export const useTextInputViewLogic = (bl: TextInputBusinessLogicObject): TextInputViewLogicObject => ({
    ...useInputViewLogic(bl),
    isValid: bl.isValid,
    onChange: bl.handleChange,
    label: bl.label,
    value: bl.innerValue,
});
