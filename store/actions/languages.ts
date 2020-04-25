import { createActions } from "redux-actions";

export const { languagesRequest, languagesSuccess, languagesFailure } = createActions<undefined>(
    "LANGUAGES_REQUEST",
    "LANGUAGES_SUCCESS",
    "LANGUAGES_FAILURE"
);
