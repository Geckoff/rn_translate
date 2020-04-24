import { createActions } from "redux-actions";

export const { languageRequest, languageSuccess, languageFailure } = createActions<undefined>(
    "LANGUAGES_REQUEST",
    "LANGUAGES_SUCCESS",
    "LANGUAGES_FAILURE"
);
