import { InputBusinessLogicProps, InputBusinessLogicObject, useInputBusinessLogic } from "../Input";

export type CheckboxBusinessLogicProps = InputBusinessLogicProps<boolean> & {
    label?: string;
};

export type CheckboxBusinessLogicObject = InputBusinessLogicObject<boolean> & {
    label: string;
};

export const useCheckboxBusinessLogic = ({
    value,
    setValue,
    isDisabled,
    validators,
    label,
}: CheckboxBusinessLogicProps): CheckboxBusinessLogicObject => {
    return {
        ...useInputBusinessLogic({
            value,
            setValue,
            isDisabled,
            validators,
        }),
        label: label || "",
    };
};
