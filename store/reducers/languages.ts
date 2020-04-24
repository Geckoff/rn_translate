import { languageRequest, languageSuccess, languageFailure } from "../actions";
import { handleActions } from "redux-actions";
import { LanguagesInfo } from "@api/translate";

export type Languages = LanguagesInfo | null;

const languages = handleActions<Languages>(
    {
        [languageRequest.toString()]: () => null,
        [languageSuccess.toString()]: (_, action) => action.payload,
        [languageFailure.toString()]: () => null,
    },
    null
);

export default languages;
