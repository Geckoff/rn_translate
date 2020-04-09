import validator from "validator";

export type ValidationObject = { isValid: boolean; errorMessage: string };
export type Validator<T> = (value: T) => ValidationObject;
export type Validation<TValue> = {
    value: TValue;
    condition: (value: TValue) => boolean;
    errorMessage: string;
};

const defaultValidationObject: ValidationObject = {
    isValid: true,
    errorMessage: ""
};

const validation = <TValue>({ value, condition, errorMessage }: Validation<TValue>): ValidationObject => {
    if (!condition(value)) {
        return {
            isValid: false,
            errorMessage
        };
    }
    return defaultValidationObject;
};

export const requiredValidator = (value: string): ValidationObject =>
    validation<string>({
        value,
        condition: value => value.length !== 0,
        errorMessage: "This field is required"
    });

export const isAlphaValidator = (value: string): ValidationObject =>
    validation<string>({
        value,
        condition: value => validator.isAlpha(value),
        errorMessage: "Letters only for this field"
    });
