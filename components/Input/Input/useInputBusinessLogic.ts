import { useState, useEffect, useCallback } from "react";
import { Validator } from "../helpers/validators";

export type InputBusinessLogicProps<TValue> = {
    value: TValue;
    setValue: React.Dispatch<React.SetStateAction<TValue>>;
    isDisabled?: boolean;
    validators?: Validator<TValue>[];
    label: string;
};

export type InputBusinessLogicObject<TValue> = {
    value: TValue;
    innerValue: TValue;
    handleChange: (newValue: TValue) => void;
    errorMessage: string;
    isValid: boolean;
    isDisabled: boolean;
    label: string;
    isInvalidForced: boolean;
    forceInvalid: () => void;
};

export const useInputBusinessLogic = <TValue>({
    value,
    setValue,
    isDisabled,
    validators,
    label
}: InputBusinessLogicProps<TValue>): InputBusinessLogicObject<TValue> => {
    const [innerValue, setInnerValue] = useState(value);
    const [isValid, setIsValid] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const [isInvalidForced, setIsInvalidForced] = useState(false);

    const handleChange = (newValue: TValue) => {
        setInnerValue(newValue);
        validate(newValue);
        if (isValid) {
            setValue(newValue);
        }
    };

    const validate = (newValue: TValue) => {
        let newIsValid = true;
        let newErrorMessage = "";
        validators?.forEach(validator => {
            const { isValid, errorMessage } = validator(newValue);
            if (newIsValid === true && isValid === false) {
                newIsValid = isValid;
                newErrorMessage = errorMessage;
            }
        });
        setIsValid(newIsValid);
        setErrorMessage(newErrorMessage);
    };

    const forceInvalid = useCallback(() => {
        setIsInvalidForced(true);
    }, [setIsInvalidForced]);

    // run validation on component mount
    useEffect(() => {
        handleChange(innerValue);
    }, []);

    return {
        value,
        innerValue,
        handleChange,
        errorMessage,
        isValid,
        isDisabled: !!isDisabled,
        label,
        isInvalidForced,
        forceInvalid
    };
};
