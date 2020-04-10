import { InputBusinessLogicProps, InputBusinessLogicObject, useInputBusinessLogic } from "../Input";

export type CheckboxBusinessLogicProps = InputBusinessLogicProps<boolean>;

export type CheckboxBusinessLogicObject = InputBusinessLogicObject<boolean>;

export const useCheckboxBusinessLogic = ({
    value,
    setValue,
    isDisabled,
    validators,
    label,
}: CheckboxBusinessLogicProps): CheckboxBusinessLogicObject => {
    return useInputBusinessLogic({
        value,
        setValue,
        isDisabled,
        validators,
        label,
    });
};
