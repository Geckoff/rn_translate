import { WordTranslationsBusinessLogicObject, WordTranslationsRadioBL } from "./WordTranslationsBusinessLogic";
import { TextInputBusinessLogicObject } from "@components/Input/TextInput";

export type WordTranslationsViewLogicProps = {
    wordTranslationsBusinessLogic: WordTranslationsBusinessLogicObject;
};

export type WordTranslationsViewLogicObject = {
    customTranslationTextInputBL: TextInputBusinessLogicObject;
    translationOptionsRadioBL: WordTranslationsRadioBL;
    customTranslationError: string;
};

export const useWordTranslationsViewLogic = ({
    wordTranslationsBusinessLogic,
}: WordTranslationsViewLogicProps): WordTranslationsViewLogicObject => {
    const {
        customTranslationTextInputBL,
        translationOptionsRadioBL,
        isUsingBlankCustomTranslation,
    } = wordTranslationsBusinessLogic;

    const shouldDisplayCustomTranslationError = isUsingBlankCustomTranslation;

    const customTranslationError = shouldDisplayCustomTranslationError ? "Selected translation cannot be blank" : "";

    return {
        customTranslationTextInputBL,
        translationOptionsRadioBL,
        customTranslationError,
    };
};
