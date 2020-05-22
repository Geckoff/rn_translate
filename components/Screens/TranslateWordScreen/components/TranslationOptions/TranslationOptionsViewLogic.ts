import { TranslationOptionBusinessLogicObject } from "./TranslationOptionsBusinessLogic";

export type TranslationOptionsViewLogicProps = {
    translationOptionBusinessLogic: TranslationOptionBusinessLogicObject;
};

export type TranslationOptionsViewLogicObject = {
    handleAddWord: () => void;
    isAddButtonDisabled: boolean;
    translatedWord: string;
    langFrom: string;
    langTo: string;
};

export const useTranslationOptionsViewLogic = ({
    translationOptionBusinessLogic,
}: TranslationOptionsViewLogicProps): TranslationOptionsViewLogicObject => {
    const {
        saveWord,
        translatedWordObject,
        isUsingBlankCustomTranslation,
        hasSelectedLists,
    } = translationOptionBusinessLogic;

    const isAddButtonDisabled = isUsingBlankCustomTranslation || !hasSelectedLists;

    const handleAddWord = saveWord;

    return {
        handleAddWord,
        translatedWord: translatedWordObject.word,
        langFrom: translatedWordObject.langFrom,
        langTo: translatedWordObject.langTo,
        isAddButtonDisabled,
    };
};
