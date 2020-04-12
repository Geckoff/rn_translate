import { TextInputBusinessLogicObject } from "./useTextInputBusinessLogic";
import { InputViewLogicObject, useInputViewLogic } from "../Input";

export type TextInputViewLogicObject = InputViewLogicObject<string> & {
    label: string;
};

export const useTextInputViewLogic = (bl: TextInputBusinessLogicObject): TextInputViewLogicObject => ({
    ...useInputViewLogic(bl),
    label: bl.label,
});
