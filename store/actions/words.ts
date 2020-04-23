import { createActions } from "redux-actions";

export const { translateWordRequest, translateWordSuccess, translateWordFailure, translateWordReset } = createActions(
    "TRANSLATE_WORD_REQUEST",
    "TRANSLATE_WORD_SUCCESS",
    "TRANSLATE_WORD_FAILURE",
    "TRANSLATE_WORD_RESET"
);
