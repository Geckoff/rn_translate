import { useEffect } from "react";
import { TranslationFormBusinessLogicObject } from "./TranslationFormBusinessLogic";
import { SelectBusinessLogicObject } from "@components/Input/Select";
import { TextInputBusinessLogicObject } from "@components/Input/TextInput";

export type TranslationFormScreenViewLogicObject = {
    handleTranslateWord: () => void;
    isTranslateButtonDisabled: boolean;
    langFromSelectBL: SelectBusinessLogicObject;
    langToSelectBL: SelectBusinessLogicObject;
    wordToTranslateTextInputBL: TextInputBusinessLogicObject;
    languagePairErr: string;
};

export const useTranslationFormViewLogic = ({
    translateWord,
    fetchLanguages,
    langFromSelectBL,
    langToSelectBL,
    wordToTranslateTextInputBL,
    langFrom,
    langTo,
    wordToTranslate,
    languagesObject,
}: TranslationFormBusinessLogicObject): TranslationFormScreenViewLogicObject => {
    useEffect(() => {
        fetchLanguages();
    }, []);

    const handleTranslateWord = () => {
        translateWord();
    };

    const getShouldShowLangPairError = (): boolean => {
        if (languagesObject === null) {
            return false;
        }

        if (langFrom !== "" && langTo !== "") {
            const langPairsTxt = languagesObject.dirs.map((langPair) => `${langPair[0]}${langPair[1]}`);
            return !langPairsTxt.some((langPair) => langPair === `${langFrom}${langTo}`);
        } else {
            return false;
        }
    };

    const isTranslateButtonDisabled =
        langFrom === "" || langTo === "" || wordToTranslate === "" || getShouldShowLangPairError();

    const languagePairErr = getShouldShowLangPairError() ? "Sorry, this language pair is not supported" : "";

    return {
        handleTranslateWord,
        isTranslateButtonDisabled,
        langFromSelectBL,
        langToSelectBL,
        wordToTranslateTextInputBL,
        languagePairErr,
    };
};
