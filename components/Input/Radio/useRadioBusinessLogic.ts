import { InputBusinessLogicProps, InputBusinessLogicObject, useInputBusinessLogic } from "../Input";

export type Option<TValue> = {
    display: string | JSX.Element;
    value: TValue;
};

export type RadioBusinessLogicProps<TValue> = InputBusinessLogicProps<TValue> & {
    options: Option<TValue>[];
};

export type RadioBusinessLogicObject<TValue> = InputBusinessLogicObject<TValue> & {
    options: Option<TValue>[];
};

export const useRadioBusinessLogic = <TValue>({
    value,
    setValue,
    isDisabled,
    isRequired,
    validators,
    options,
}: RadioBusinessLogicProps<TValue>): RadioBusinessLogicObject<TValue> => {
    return {
        ...useInputBusinessLogic({
            value,
            setValue,
            isDisabled,
            validators,
            isRequired,
        }),
        options,
    };
};
