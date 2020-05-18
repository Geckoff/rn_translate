import { createActions } from "redux-actions";
import { TranslateObject, TranslationResult } from "@api/translate";
import { NetworkFailure } from "@store/actions/network";

/**
 * Translate word
 */
export type StoreTranslationResult = TranslationResult & {
    langFrom: string;
    langTo: string;
};
export const { translateWordSuccess } = createActions<StoreTranslationResult>("TRANSLATE_WORD_SUCCESS");
export const { translateWordReset } = createActions<undefined>("TRANSLATE_WORD_RESET");
export const { translateWordFailure } = createActions<NetworkFailure>("TRANSLATE_WORD_FAILURE");
export const { translateWordRequest } = createActions<TranslateObject>("TRANSLATE_WORD_REQUEST");
