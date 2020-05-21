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
    const {
        getDataToSave,
        translatedWordObject,
        isUsingBlankCustomTranslation,
        hasSelectedLists,
    } = translationOptionBusinessLogic;

    const isAddButtonDisabled = isUsingBlankCustomTranslation || !hasSelectedLists;

    return {
        getDataToSave,
        translatedWord: translatedWordObject.word,
        langFrom: translatedWordObject.langFrom,
        langTo: translatedWordObject.langTo,
        isAddButtonDisabled,
    };
};
