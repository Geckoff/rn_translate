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
    label: string;
    value: TValue;
    isValid: boolean;
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
        isValid: bl.isValid,
        onChange: bl.handleChange,
        label: bl.label,
        value: bl.innerValue
    };
};
