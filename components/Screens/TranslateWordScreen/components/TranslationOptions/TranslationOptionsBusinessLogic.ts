import { TranslationOption } from "@api/translate";
import { WordTranslationsBusinessLogicObject } from "./WordTranslations/WordTranslationsBusinessLogic";
import { useSelector } from "react-redux";
import { getTranslatedWord } from "@store/reducers";
import { StoreTranslationResult } from "@store/actions";
import { ListsPickerBusinessLogicObject } from "./ListsPicker";

export type TranslationOptionBusinessLogicProps = {
    wordTranslationsBusinessLogic: WordTranslationsBusinessLogicObject;
    listsPickerBusinessLogic: ListsPickerBusinessLogicObject;
};

export type TranslationOptionBusinessLogicObject = {
    getDataToSave: () => void;
    translatedWordObject: StoreTranslationResult;
    isUsingBlankCustomTranslation: boolean;
    hasSelectedLists: boolean;
};

export const useTranslationOptionBusinessLogic = ({
    wordTranslationsBusinessLogic,
    listsPickerBusinessLogic,
}: TranslationOptionBusinessLogicProps): TranslationOptionBusinessLogicObject => {
    const {
        translationOptionsRadioBL,
        customTranslationIndicator,
        customTranslation,
        translationOptions,
        isUsingBlankCustomTranslation,
    } = wordTranslationsBusinessLogic;
    const translatedWordObject = useSelector(getTranslatedWord) as StoreTranslationResult;

    const hasSelectedLists = listsPickerBusinessLogic.selectedLists.length !== 0;

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
        console.log(word, "word");
        console.log(primaryTranslation, "primaryTranslation");
        console.log(secondaryTranslations, "secondaryTranslations");
        console.log(listsPickerBusinessLogic.selectedLists, "selectedLists");
    };

    return {
        getDataToSave,
        translatedWordObject,
        isUsingBlankCustomTranslation,
        hasSelectedLists,
    };
};
