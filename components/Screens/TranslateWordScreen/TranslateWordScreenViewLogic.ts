import {
    useTranslateWordScreenBusinessLogic,
    TranslateWordScreenBusinessLogicObject,
} from "./TranslateWordScreenBusinessLogic";

export type TranslateWordScreenViewLogicObject = {
    translationFormBusinessLogic: TranslateWordScreenBusinessLogicObject;
    shouldLoadTranslationOptions: boolean;
};

export const useTranslateWordScreenViewLogic = () => {
    const { translatedWord, translationFormBusinessLogic } = useTranslateWordScreenBusinessLogic();
    const shouldLoadTranslationOptions = translatedWord !== null;

    return {
        translationFormBusinessLogic,
        shouldLoadTranslationOptions,
    };
};
