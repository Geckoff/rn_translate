import { InputBusinessLogicProps, InputBusinessLogicObject, useInputBusinessLogic } from "../Input";

export type Option = {
    display: string;
    value: string;
};

export type RadioBusinessLogicProps = InputBusinessLogicProps<string> & {
    options: Option[];
};

export type RadioBusinessLogicObject = InputBusinessLogicObject<string> & {
    options: Option[];
};

export const useRadioBusinessLogic = ({
    value,
    setValue,
    isDisabled,
    isRequired,
    validators,
    options,
}: RadioBusinessLogicProps): RadioBusinessLogicObject => {
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
