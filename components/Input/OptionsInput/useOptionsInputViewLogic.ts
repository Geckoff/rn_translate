import { OptionsInputBusinessLogicObject, Option } from "./useOptionsInputBusinessLogic";
import { InputViewLogicObject, useInputViewLogic } from "../Input";

export type OptionsInputViewLogicObject = InputViewLogicObject<string> & {
    options: Option[];
};

export const useOptionsInputViewLogic = (bl: OptionsInputBusinessLogicObject): OptionsInputViewLogicObject => {
    return {
        ...useInputViewLogic(bl),
        options: bl.options,
    };
};
