import {
    translateWordRequest,
    translateWordSuccess,
    translateWordFailure,
    translateWordReset,
    StoreTranslationResult,
} from "../../actions";
import { combineReducers } from "redux";
import { handleActions } from "redux-actions";

export type TranslatedWord = StoreTranslationResult | null;

export const translatedWord = handleActions<TranslatedWord>(
    {
        [translateWordRequest.toString()]: () => null,
        [translateWordSuccess.toString()]: (_, action) => action.payload,
        [translateWordFailure.toString()]: () => null,
        [translateWordReset.toString()]: () => null,
    },
    null
);

export type Words = {
    translatedWord: TranslatedWord;
};

export default combineReducers({
    translatedWord,
});
