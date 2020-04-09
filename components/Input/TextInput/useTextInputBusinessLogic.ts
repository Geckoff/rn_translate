import { useState, useRef, useEffect } from "react";
import { requiredValidator, Validator } from "../helpers/validators";
import { InputBusinessLogicProps, InputBusinessLogicObject, useInputBusinessLogic } from "../Input";

export type TextInputBusinessLogicProps = InputBusinessLogicProps<string> & {
    isRequired?: boolean;
};

export type TextInputBusinessLogicObject = InputBusinessLogicObject<string> & {
    isRequired: boolean;
};

export const useTextInputBusinessLogic = ({
    value,
    setValue,
    isDisabled,
    isRequired,
    validators,
    label
}: TextInputBusinessLogicProps): TextInputBusinessLogicObject => {
    if (isRequired) {
        validators = validators !== undefined ? [...validators, requiredValidator] : [requiredValidator];
    }

    return {
        ...useInputBusinessLogic({
            value,
            setValue,
            isDisabled,
            validators,
            label
        }),
        isRequired: !!isRequired
    };
};
