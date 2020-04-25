import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { translateWordRequest } from "@store/actions/words";
import { languagesRequest } from "@store/actions/languages";
import { getLanguages } from "@store/reducers";
import { Languages } from "@store/reducers/languages";
import { useSelectBusinessLogic, Option, SelectBusinessLogicObject } from "@components/Input/Select";
import { useTextInputBusinessLogic, TextInputBusinessLogicObject } from "@components/Input/TextInput";

export type TranslationFormBusinessLogicObject = {
    translateWord: () => void;
    fetchLanguages: () => void;
    langFromSelectBL: SelectBusinessLogicObject;
    langToSelectBL: SelectBusinessLogicObject;
    wordToTranslateTextInputBL: TextInputBusinessLogicObject;
    langFrom: string;
    langTo: string;
    wordToTranslate: string;
};

export const useTranslationFormBusinessLogic = (): TranslationFormBusinessLogicObject => {
    const [langFrom, setLangFrom] = useState("");
    const [langTo, setLangTo] = useState("");
    const [wordToTranslate, setWordToTranslate] = useState("");
    const dispatch = useDispatch();
    const languagesObject: Languages = useSelector(getLanguages);
    const isLanguagesLoaded = languagesObject !== null;

    const getLanguagesToSelect = (langs: { [key: string]: string }): Option[] => {
        const languageOptions = [];
        for (const langCode in langs) {
            languageOptions.push({ label: langs[langCode], value: langCode });
        }
        return languageOptions;
    };

    const languagesToSelect: Option[] = isLanguagesLoaded
        ? getLanguagesToSelect(languagesObject!.langs)
        : [{ label: "Select", value: "" }];

    const langFromSelectBL: SelectBusinessLogicObject = useSelectBusinessLogic({
        label: "Translate from:",
        value: langFrom,
        setValue: setLangFrom,
        options: languagesToSelect,
    });

    const langToSelectBL: SelectBusinessLogicObject = useSelectBusinessLogic({
        label: "Translate to:",
        value: langTo,
        setValue: setLangTo,
        options: languagesToSelect,
    });

    const wordToTranslateTextInputBL: TextInputBusinessLogicObject = useTextInputBusinessLogic({
        value: wordToTranslate,
        label: "Word to Translate",
        setValue: setWordToTranslate,
    });

    const fetchLanguages = () => {
        dispatch(languagesRequest());
    };

    const translateWord = () => {
        dispatch(
            translateWordRequest({
                langFrom,
                langTo,
                word: wordToTranslate,
            })
        );
    };

    return {
        translateWord,
        fetchLanguages,
        langFromSelectBL,
        langToSelectBL,
        langTo,
        langFrom,
        wordToTranslateTextInputBL,
        wordToTranslate,
    };
};
