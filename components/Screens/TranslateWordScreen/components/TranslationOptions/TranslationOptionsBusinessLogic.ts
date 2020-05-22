import { TranslationOption } from "@api/translate";
import { WordTranslationsBusinessLogicObject } from "./WordTranslations/WordTranslationsBusinessLogic";
import { useSelector, useDispatch } from "react-redux";
import { getTranslatedWord } from "@store/reducers";
import { StoreTranslationResult, addWordRequest } from "@store/actions";
import { ListsPickerBusinessLogicObject } from "./ListsPicker";
import { Word } from "@db/entities";

export type TranslationOptionBusinessLogicProps = {
    wordTranslationsBusinessLogic: WordTranslationsBusinessLogicObject;
    listsPickerBusinessLogic: ListsPickerBusinessLogicObject;
};

export type TranslationOptionBusinessLogicObject = {
    saveWord: () => void;
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
    const dispatch = useDispatch();

    const hasSelectedLists = listsPickerBusinessLogic.selectedLists.length !== 0;

    const getDataToSave = () => {
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

        const lists = listsPickerBusinessLogic.selectedLists.map((selectedList) => selectedList.list);

        return {
            word: translatedWordObject.word,
            langFrom: translatedWordObject.langFrom,
            langTo: translatedWordObject.langTo,
            primaryTranslation,
            secondaryTranslations,
            lists,
        };
    };

    const saveWord = () => {
        const dataToSave = getDataToSave();
        const word = new Word();
        word.word = dataToSave.word;
        word.primaryTranslation = dataToSave.primaryTranslation;
        word.secondaryTranslations = dataToSave.secondaryTranslations;
        word.langFrom = dataToSave.langFrom;
        word.langTo = dataToSave.langTo;
        word.lists = dataToSave.lists;
        dispatch(addWordRequest(word));
    };

    return {
        saveWord,
        translatedWordObject,
        isUsingBlankCustomTranslation,
        hasSelectedLists,
    };
};
