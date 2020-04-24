import { createActions } from "redux-actions";
import { TranslationResult } from "@api/translate";

export const { translateWordSuccess, translateWordFailure, translateWordReset } = createActions<undefined>(
    "TRANSLATE_WORD_SUCCESS",
    "TRANSLATE_WORD_FAILURE",
    "TRANSLATE_WORD_RESET"
);

export const { translateWordRequest } = createActions<TranslationResult>("TRANSLATE_WORD_REQUEST");
