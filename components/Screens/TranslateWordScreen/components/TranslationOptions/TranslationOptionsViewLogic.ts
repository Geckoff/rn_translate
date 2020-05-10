import {
    TranslationOptionBusinessLogicObject,
    useTranslationOptionBusinessLogic,
    TranslationOptionsRadioBL,
} from "./TranslationOptionsBusinessLogic";
import { TextInputBusinessLogicObject } from "@components/Input/TextInput";

export type TranslationOptionsViewLogicObject = {
    customTranslationTextInputBL: TextInputBusinessLogicObject;
    translationOptionsRadioBL: TranslationOptionsRadioBL;
    getDataToSave: () => void;
    customTranslationError: string;
};

export const useTranslationOptionsViewLogic = () => {
    const {
        customTranslationTextInputBL,
        translationOptionsRadioBL,
        getDataToSave,
        customTranslation,
        customTranslationIndicator,
    } = useTranslationOptionBusinessLogic();

    const customTranslationError = "Selected translation cannot be blank";

    const isAddButtonDisabled =
        translationOptionsRadioBL.value.text === customTranslationIndicator && customTranslation === "";

    return {
        customTranslationTextInputBL,
        translationOptionsRadioBL,
        getDataToSave,
    };
};
