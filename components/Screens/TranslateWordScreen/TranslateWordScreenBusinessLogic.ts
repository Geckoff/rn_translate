import { useTranslationFormBusinessLogic } from "./components/TranslationForm";

export const useTranslateWordScreenBusinessLogic = () => {
    const translationFormBusinessLogic = useTranslationFormBusinessLogic();

    return {
        translationFormBusinessLogic,
    };
};
