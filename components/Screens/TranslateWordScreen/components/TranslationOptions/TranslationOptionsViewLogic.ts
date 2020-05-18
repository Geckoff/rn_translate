import { TranslationOptionBusinessLogicObject } from "./TranslationOptionsBusinessLogic";

export type TranslationOptionsViewLogicProps = {
    translationOptionBusinessLogic: TranslationOptionBusinessLogicObject;
};

export type TranslationOptionsViewLogicObject = {
    getDataToSave: () => void;
    isAddButtonDisabled: boolean;
    translatedWord: string;
    langFrom: string;
    langTo: string;
};

export const useTranslationOptionsViewLogic = ({
    translationOptionBusinessLogic,
}: TranslationOptionsViewLogicProps): TranslationOptionsViewLogicObject => {
    const { getDataToSave, translatedWordObject, isUsingBlankCustomTranslation } = translationOptionBusinessLogic;

    return {
        getDataToSave,
        translatedWord: translatedWordObject.word,
        langFrom: translatedWordObject.langFrom,
        langTo: translatedWordObject.langTo,
        isAddButtonDisabled: isUsingBlankCustomTranslation,
    };
};
