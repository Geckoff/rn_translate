import { useTranslationFormBusinessLogic, TranslationFormBusinessLogicObject } from "./components/TranslationForm";
import { useSelector } from "react-redux";
import { TranslatedWord } from "@store/reducers/words";
import { getTranslatedWord } from "@store/reducers";

export type TranslateWordScreenBusinessLogicObject = {
    translationFormBusinessLogic: TranslationFormBusinessLogicObject;
    translatedWord: TranslatedWord;
};

export const useTranslateWordScreenBusinessLogic = (): TranslateWordScreenBusinessLogicObject => {
    const translationFormBusinessLogic = useTranslationFormBusinessLogic();
    const translatedWord: TranslatedWord = useSelector(getTranslatedWord);

    return {
        translationFormBusinessLogic,
        translatedWord,
    };
};
