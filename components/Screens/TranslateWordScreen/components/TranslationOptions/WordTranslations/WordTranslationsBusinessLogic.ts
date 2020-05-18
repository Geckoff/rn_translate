import { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { useTextInputBusinessLogic, TextInputBusinessLogicObject } from "@components/Input/TextInput";
import { useRadioBusinessLogic, RadioBusinessLogicObject, Option } from "@components/Input/Radio";
import { StoreTranslationResult } from "@store/actions";
import { getTranslatedWord } from "@store/reducers";
import { TranslationOption } from "@api/translate";
import { getWordTranslationsLabel } from "./getWordTranslationsLabel";

export type WordTranslationsRadioBL = RadioBusinessLogicObject<TranslationOption>;

export type WordTranslationsBusinessLogicObject = {
    customTranslationTextInputBL: TextInputBusinessLogicObject;
    translationOptionsRadioBL: WordTranslationsRadioBL;
    customTranslation: string;
    customTranslationIndicator: string;
    translationOptions: TranslationOption[];
    isUsingBlankCustomTranslation: boolean;
};

export const useWordTranslationsBusinessLogic = (): WordTranslationsBusinessLogicObject => {
    const customTranslationIndicator = "#CUSTOM_TRANSLATION#";
    const translatedWord = useSelector(getTranslatedWord) as StoreTranslationResult;

    const [customTranslation, setCustomTranslation] = useState<string>("");

    const translationOptions: TranslationOption[] = useMemo(
        () => [...translatedWord!.translationOptions, { text: customTranslationIndicator, pos: "" }],
        [translatedWord]
    );

    const translationRadioOptions: Option<TranslationOption>[] = translationOptions.map((translationOption) => ({
        display: getWordTranslationsLabel(translationOption),
        value: translationOption,
    }));

    const [selectedTranslation, setSelectedTranslation] = useState<TranslationOption>(translationRadioOptions[0].value);

    const translationOptionsRadioBL = useRadioBusinessLogic<TranslationOption>({
        value: selectedTranslation,
        setValue: setSelectedTranslation,
        options: translationRadioOptions,
    });

    const customTranslationTextInputBL = useTextInputBusinessLogic({
        value: customTranslation,
        label: "Your Translation",
        setValue: setCustomTranslation,
    });

    const isUsingBlankCustomTranslation =
        translationOptionsRadioBL.value.text === customTranslationIndicator && customTranslation === "";

    return {
        customTranslationTextInputBL,
        translationOptionsRadioBL,
        customTranslation,
        customTranslationIndicator,
        translationOptions,
        isUsingBlankCustomTranslation,
    };
};
