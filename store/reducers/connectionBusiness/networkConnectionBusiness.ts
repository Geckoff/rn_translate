import { languagesNetworkFetch } from "@store/reducers/languages";
import { wordsNetworkFetch } from "@store/reducers/words";
import { combineReducers } from "redux";

export type IsNetworkConnectionBusy = boolean;
export type HasBeenNetworkConnectionBusy = boolean;
export type NetworkEror = null | string;

export type NetworkConnectionBusinessSection = {
    isNetworkConnectionBusy: IsNetworkConnectionBusy;
    hasBeenNetworkConnectionBusy: HasBeenNetworkConnectionBusy;
    networkEror: NetworkEror;
};

export type NetworkConnectionBusiness = {
    wordsNetworkFetch: NetworkConnectionBusinessSection;
    languagesNetworkFetch: NetworkConnectionBusinessSection;
};

export default combineReducers({
    wordsNetworkFetch,
    languagesNetworkFetch,
});
