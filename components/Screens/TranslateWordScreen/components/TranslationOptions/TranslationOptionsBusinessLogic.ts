import { useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTextInputBusinessLogic, TextInputBusinessLogicObject } from "@components/Input/TextInput";
import { useRadioBusinessLogic, RadioBusinessLogicObject, Option } from "@components/Input/Radio";
import { TranslatedWord } from "@store/reducers/words";
import { getTranslatedWord } from "@store/reducers";
import { TranslationResult, TranslationOption } from "@api/translate";

export type TranslationOptionsRadioBL = RadioBusinessLogicObject<TranslationOption>;

export type TranslationOptionBusinessLogicObject = {
    customTranslationTextInputBL: TextInputBusinessLogicObject;
    translationOptionsRadioBL: TranslationOptionsRadioBL;
    getDataToSave: () => void;
    customTranslation: string;
    customTranslationIndicator: string;
};

export const useTranslationOptionBusinessLogic = (): TranslationOptionBusinessLogicObject => {
    const customTranslationIndicator = "#CUSTOM_TRANSLATION#";
    const translatedWord = useSelector(getTranslatedWord) as TranslationResult;
    const [customTranslation, setCustomTranslation] = useState<string>("");

    const customTranslationTextInputBL = useTextInputBusinessLogic({
        value: customTranslation,
        label: "Your Translation",
        setValue: setCustomTranslation,
    });

    const translationOptions: TranslationOption[] = useMemo(
        () => [...translatedWord!.translationOptions, { text: customTranslationIndicator, pos: "" }],
        [translatedWord]
    );

    const translationRadioOptions: Option<TranslationOption>[] = translationOptions.map((translationOption) => ({
        display: translationOption.text,
        value: translationOption,
    }));

    const [selectedTranslation, setSelectedTranslation] = useState<TranslationOption>(translationRadioOptions[0].value);

    const translationOptionsRadioBL = useRadioBusinessLogic<TranslationOption>({
        value: selectedTranslation,
        setValue: setSelectedTranslation,
        options: translationRadioOptions,
    });

    const getDataToSave = () => {
        const word = translatedWord.word;
        const selectedOption = translationOptionsRadioBL.value;
        const primaryTranslation: TranslationOption =
            selectedOption.text === customTranslationIndicator ? { text: customTranslation, pos: "" } : selectedOption;
        const secondaryTranslations = translationOptions
            // exclude primary translations from secondary ones
            .filter((translationOption) => translationOption !== translationOptionsRadioBL.value)
            // add custom tramslation value to secondary ones
            .map((translationOption) =>
                translationOption.text === customTranslationIndicator
                    ? { text: customTranslation, pos: "" }
                    : translationOption
            )
            // remove custom translation if it's blank
            .filter((translationOption) => translationOption.text !== "");
        console.log(word, primaryTranslation, secondaryTranslations);
    };

    return {
        customTranslationTextInputBL,
        translationOptionsRadioBL,
        getDataToSave,
        customTranslation,
        customTranslationIndicator,
    };
};
