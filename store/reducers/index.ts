import { combineReducers } from "redux";
import networkFetch, { NetworkFetch } from "./fetch/networkFetch";
import requestError, { RequestError } from "./requests/requestError";
import words, { Words } from "./words/words";
import languages, { Languages } from "./languages/languages";
import isOnline, { IsOnline } from "./network/networkStatus";

export type State = {
    networkFetch: NetworkFetch;
    requestError: RequestError;
    words: Words;
    languages: Languages;
    isOnline: IsOnline;
};

export default combineReducers({
    networkFetch,
    requestError,
    words,
    languages,
    isOnline,
});

export const getRequestError = (state: State) => state.requestError;
export const getTranslatedWord = (state: State) => state.words.translatedWord;
export const getLanguages = (state: State) => state.languages;
export const getIsOnline = (state: State) => state.isOnline;

export const getWordsNetworkFetch = (state: State) => state.networkFetch.wordsNetworkFetch;
export const getLanguagesNetworkFetch = (state: State) => state.networkFetch.languagesNetworkFetch;
