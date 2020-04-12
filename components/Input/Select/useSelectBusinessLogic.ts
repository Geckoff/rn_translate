import { InputBusinessLogicProps, InputBusinessLogicObject, useInputBusinessLogic } from "../Input";

export type Option = {
    display: string;
    value: string;
};

export type SelectOption = Option & {
    id: number;
};

export type SelectBusinessLogicProps = InputBusinessLogicProps<string> & {
    options: Option[];
    label: string;
};

export type SelectBusinessLogicObject = InputBusinessLogicObject<string> & {
    options: Option[];
    label: string;
};

export const useSelectBusinessLogic = ({
    value,
    setValue,
    isDisabled,
    isRequired,
    validators,
    options,
    label,
}: SelectBusinessLogicProps): SelectBusinessLogicObject => {
    return {
        ...useInputBusinessLogic({
            value,
            setValue,
            isDisabled,
            validators,
            isRequired,
        }),
        options,
        label,
    };
};
