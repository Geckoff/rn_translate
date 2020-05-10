import { useSelector } from "react-redux";
import { TranslatedWord } from "@store/reducers/words";
import { getTranslatedWord } from "@store/reducers";

export type TranslateWordScreenBusinessLogicObject = {
    translatedWord: TranslatedWord;
};

export const useTranslateWordScreenBusinessLogic = (): TranslateWordScreenBusinessLogicObject => {
    const translatedWord = useSelector(getTranslatedWord);

    return {
        translatedWord,
    };
};
