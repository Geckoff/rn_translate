import { combineReducers } from "redux";
import networkFetch, { NetworkFetch } from "./networkFetch";
import requestError, { RequestError } from "./requestError";
import words, { Words } from "./words";
import languages, { Languages } from "./languages";

export type State = {
    networkFetch: NetworkFetch;
    requestError: RequestError;
    words: Words;
    languages: Languages;
};

export default combineReducers({
    networkFetch,
    requestError,
    words,
    languages,
});

export const getIsNetworkFetching = (state: State) => state.networkFetch.isNetworkFetching;
export const getHasBeenNetworkFetched = (state: State) => state.networkFetch.hasBeenNetworkFetched;
export const getNetworkEror = (state: State) => state.networkFetch.networkEror;
export const getRequestError = (state: State) => state.requestError;
export const getTranslatedWord = (state: State) => state.words.translatedWord;
export const getLanguages = (state: State) => state.languages;
