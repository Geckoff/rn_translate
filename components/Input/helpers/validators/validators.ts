import validator from "validator";

export type ValidationObject = { isValid: boolean; errorMessage: string };
export type Validator<TValue> = (value: TValue) => ValidationObject;
export type TextValidator = Validator<string>;
export type ValidationCondition<TValue> = (value: TValue) => boolean;
export type Validation<TValue> = {
    value: TValue;
    condition: ValidationCondition<TValue>;
    errorMessage: string;
};

const defaultValidationObject: ValidationObject = {
    isValid: true,
    errorMessage: "",
};

const validation = <TValue>({ value, condition, errorMessage }: Validation<TValue>): ValidationObject => {
    if (!condition(value)) {
        return {
            isValid: false,
            errorMessage,
        };
    }
    return defaultValidationObject;
};

export const requiredValidator: TextValidator = (value: string): ValidationObject =>
    validation<string>({
        value,
        condition: (value) => value.length !== 0,
        errorMessage: "This field is required",
    });

export const isAlphaValidator: TextValidator = (value: string): ValidationObject =>
    validation<string>({
        value,
        condition: (value) => validator.isAlpha(value),
        errorMessage: "Letters only for this field",
    });

export type CustomValidationProps<TValue> = {
    validationCondition: ValidationCondition<TValue>;
    errorMessage?: string;
};

export const getCustomValidator = <TValue>({ validationCondition, errorMessage }: CustomValidationProps<TValue>) => (
    value: TValue
): ValidationObject =>
    validation<TValue>({
        value,
        condition: validationCondition,
        errorMessage: errorMessage || "Error",
    });
