import { useState, useCallback } from "react";
import { InputBusinessLogicObject } from "./useInputBusinessLogic";

export type InputViewLogicObject<TValue> = {
    hasBeenFocused: boolean;
    isFocused: boolean;
    onFocus: () => void;
    onBlur: () => void;
    shouldShowInvalidErrors: boolean;
    errorMessage: string;
    isInvalid: boolean;
    onChange: (value: TValue) => void;
    value: TValue;
    isValid: boolean;
    isRequired: boolean;
    isDisabled: boolean;
};

export const useInputViewLogic = <TValue>(bl: InputBusinessLogicObject<TValue>): InputViewLogicObject<TValue> => {
    const [hasBeenFocused, setHasBeenFocused] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const onFocus = useCallback(() => {
        setIsFocused(true);
    }, [setIsFocused]);

    const onBlur = useCallback(() => {
        if (!hasBeenFocused) {
            setHasBeenFocused(true);
        }
        setIsFocused(false);
    }, [setIsFocused, setHasBeenFocused]);

    const shouldShowInvalidErrors = hasBeenFocused || bl.isInvalidForced;

    const errorMessage = shouldShowInvalidErrors ? bl.errorMessage : "";

    const isInvalid = shouldShowInvalidErrors && !bl.isValid;

    return {
        hasBeenFocused,
        isFocused,
        onFocus,
        onBlur,
        shouldShowInvalidErrors,
        errorMessage,
        isInvalid,
        isRequired: bl.isRequired,
        isValid: bl.isValid,
        onChange: bl.handleChange,
        value: bl.innerValue,
        isDisabled: bl.isDisabled,
    };
};
