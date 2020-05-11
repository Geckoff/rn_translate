import {
    TranslationOptionBusinessLogicObject,
    useTranslationOptionBusinessLogic,
    TranslationOptionsRadioBL,
} from "./TranslationOptionsBusinessLogic";
import { TextInputBusinessLogicObject } from "@components/Input/TextInput";
import { capitalize, lowerCase } from "lodash";

export type TranslationOptionsViewLogicObject = {
    customTranslationTextInputBL: TextInputBusinessLogicObject;
    translationOptionsRadioBL: TranslationOptionsRadioBL;
    getDataToSave: () => void;
    customTranslationError: string;
    isAddButtonDisabled: boolean;
    translatedWord: string;
    langFrom: string;
    langTo: string;
};

export const useTranslationOptionsViewLogic = (): TranslationOptionsViewLogicObject => {
    const {
        customTranslationTextInputBL,
        translationOptionsRadioBL,
        getDataToSave,
        customTranslation,
        customTranslationIndicator,
        ...blObject
    } = useTranslationOptionBusinessLogic();

    const translatedWord = capitalize(blObject.translatedWord);
    const langFrom = lowerCase(blObject.langFrom);
    const langTo = lowerCase(blObject.langTo);

    const isAddButtonDisabled =
        translationOptionsRadioBL.value.text === customTranslationIndicator && customTranslation === "";

    const shouldDisplayCustomTranslationError = isAddButtonDisabled;

    const customTranslationError = shouldDisplayCustomTranslationError ? "Selected translation cannot be blank" : "";

    return {
        customTranslationTextInputBL,
        translationOptionsRadioBL,
        getDataToSave,
        customTranslationError,
        isAddButtonDisabled,
        translatedWord,
        langFrom,
        langTo,
    };
};
