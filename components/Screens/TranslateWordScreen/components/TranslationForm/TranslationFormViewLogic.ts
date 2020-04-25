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
};

export const useTranslationFormScreenViewLogic = ({
    translateWord,
    fetchLanguages,
    langFromSelectBL,
    langToSelectBL,
    wordToTranslateTextInputBL,
    langFrom,
    langTo,
    wordToTranslate,
}: TranslationFormBusinessLogicObject) => {
    useEffect(() => {
        fetchLanguages();
    }, []);

    const handleTranslateWord = () => {
        translateWord();
    };

    const isTranslateButtonDisabled = langFrom === "" || langTo === "" || wordToTranslate === "";

    return {
        handleTranslateWord,
        isTranslateButtonDisabled,
        langFromSelectBL,
        langToSelectBL,
        wordToTranslateTextInputBL,
    };
};
