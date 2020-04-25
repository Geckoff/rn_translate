import { languagesRequest, languagesSuccess, languagesFailure } from "../../actions";
import { handleActions } from "redux-actions";
import { LanguagesInfo } from "@api/translate";

export type Languages = LanguagesInfo | null;

const languages = handleActions<Languages>(
    {
        [languagesRequest.toString()]: () => null,
        [languagesSuccess.toString()]: (_, action) => action.payload,
        [languagesFailure.toString()]: () => null,
    },
    null
);

export default languages;
