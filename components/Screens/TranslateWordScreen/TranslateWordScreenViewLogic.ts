import { useTranslateWordScreenBusinessLogic } from "./TranslateWordScreenBusinessLogic";

export type TranslateWordScreenViewLogicObject = {
    shouldLoadTranslationOptions: boolean;
};

export const useTranslateWordScreenViewLogic = (): TranslateWordScreenViewLogicObject => {
    const { translatedWord } = useTranslateWordScreenBusinessLogic();
    const shouldLoadTranslationOptions = translatedWord !== null;

    return {
        shouldLoadTranslationOptions,
    };
};
