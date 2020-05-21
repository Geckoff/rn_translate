import { createActions } from "redux-actions";
import { TranslateObject, TranslationResult } from "@api/translate";
import { NetworkFailure } from "@store/actions/network";
import { DbFailure } from "@store/actions/db";
import { Word } from "@db/entities";

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

/**
 * Add word
 */
export const { addWordSuccess } = createActions<undefined>("ADD_WORD_SUCCESS");
export const { addWordFailure } = createActions<DbFailure>("ADD_WORD_FAILURE");
export const { addWordRequest } = createActions<Word>("ADD_WORD_REQUEST");
