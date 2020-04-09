import { useState } from "react";
import { TextInputBusinessLogicProps, TextInputBusinessLogicObject } from "./useTextInputBusinessLogic";
import { InputViewLogicObject, useInputViewLogic } from "../Input";

export type TextInputViewLogicObject = InputViewLogicObject<string> & {
    isRequired: boolean;
};

export const useTextInputViewLogic = (bl: TextInputBusinessLogicObject): TextInputViewLogicObject => ({
    ...useInputViewLogic(bl),
    isValid: bl.isValid,
    onChange: bl.handleChange,
    label: bl.label,
    value: bl.innerValue,
    isRequired: bl.isRequired
});
