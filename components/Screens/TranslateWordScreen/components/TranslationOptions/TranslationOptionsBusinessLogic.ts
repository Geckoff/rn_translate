import { TranslationOption } from "@api/translate";
import { WordTranslationsBusinessLogicObject } from "./WordTranslations/WordTranslationsBusinessLogic";
import { useSelector } from "react-redux";
import { getTranslatedWord } from "@store/reducers";
import { StoreTranslationResult } from "@store/actions";

export type TranslationOptionBusinessLogicProps = {
    wordTranslationsBusinessLogic: WordTranslationsBusinessLogicObject;
};

export type TranslationOptionBusinessLogicObject = {
    getDataToSave: () => void;
    translatedWordObject: StoreTranslationResult;
    isUsingBlankCustomTranslation: boolean;
};

export const useTranslationOptionBusinessLogic = ({
    wordTranslationsBusinessLogic,
}: TranslationOptionBusinessLogicProps): TranslationOptionBusinessLogicObject => {
    const {
        translationOptionsRadioBL,
        customTranslationIndicator,
        customTranslation,
        translationOptions,
        isUsingBlankCustomTranslation,
    } = wordTranslationsBusinessLogic;
    const translatedWordObject = useSelector(getTranslatedWord) as StoreTranslationResult;

    const getDataToSave = () => {
        const word = translatedWordObject.word;
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
        getDataToSave,
        translatedWordObject,
        isUsingBlankCustomTranslation,
    };
};
