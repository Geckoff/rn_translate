import { InputBusinessLogicProps, InputBusinessLogicObject, useInputBusinessLogic } from "../Input";

export type Option = {
    display: string;
    value: string;
};

export type OptionsInputBusinessLogicProps = InputBusinessLogicProps<string> & {
    options: Option[];
};

export type OptionsInputBusinessLogicObject = InputBusinessLogicObject<string> & {
    options: Option[];
};

export const useOptionsInputBusinessLogic = ({
    value,
    setValue,
    isDisabled,
    isRequired,
    validators,
    options,
}: OptionsInputBusinessLogicProps): OptionsInputBusinessLogicObject => {
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
