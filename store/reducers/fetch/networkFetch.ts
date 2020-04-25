import { languagesNetworkFetch } from "@store/reducers/languages";
import { wordsNetworkFetch } from "@store/reducers/words";
import { combineReducers } from "redux";

export type IsNetworkFetching = boolean;
export type HasBeenNetworkFetched = boolean;
export type NetworkEror = null | string;

export type NetworkFetchSection = {
    isNetworkFetching: IsNetworkFetching;
    hasBeenNetworkFetched: HasBeenNetworkFetched;
    networkEror: NetworkEror;
};

export type NetworkFetch = {
    wordsNetworkFetch: NetworkFetchSection;
    languagesNetworkFetch: NetworkFetchSection;
};

export default combineReducers({
    wordsNetworkFetch,
    languagesNetworkFetch,
});
