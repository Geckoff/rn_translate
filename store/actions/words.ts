import { createActions } from "redux-actions";
import { TranslateObject, TranslationResult } from "@api/translate";

export type StoreTranslationResult = TranslationResult & {
    langFrom: string;
    langTo: string;
};

export const { translateWordSuccess } = createActions<StoreTranslationResult>("TRANSLATE_WORD_SUCCESS");

export const { translateWordReset } = createActions<undefined>("TRANSLATE_WORD_RESET");

export type TranslateWordFailure = undefined | string;

export const { translateWordFailure } = createActions<TranslateWordFailure>("TRANSLATE_WORD_FAILURE");

export const { translateWordRequest } = createActions<TranslateObject>("TRANSLATE_WORD_REQUEST");
