import { InputBusinessLogicProps, InputBusinessLogicObject, useInputBusinessLogic } from "../Input";

export type TextInputBusinessLogicProps = InputBusinessLogicProps<string> & {
    label: string;
};

export type TextInputBusinessLogicObject = InputBusinessLogicObject<string> & {
    label: string;
};

export const useTextInputBusinessLogic = ({
    value,
    setValue,
    isDisabled,
    isRequired,
    validators,
    label,
}: TextInputBusinessLogicProps): TextInputBusinessLogicObject => {
    return {
        ...useInputBusinessLogic({
            value,
            setValue,
            isDisabled,
            validators,
            isRequired,
        }),
        label,
    };
};
