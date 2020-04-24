import { useTranslateWordScreenBusinessLogic } from "./TranslateWordScreenBusinessLogic";

export const useTranslateWordScreenViewLogic = () => {
    const { translateWord, resetWord } = useTranslateWordScreenBusinessLogic();

    const handleTranslateWord = () => {
        translateWord();
    };

    const handleResetWord = () => {
        resetWord();
    };

    return {
        handleTranslateWord,
        handleResetWord,
    };
};
