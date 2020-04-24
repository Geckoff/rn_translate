import {
    translateWordRequest,
    translateWordSuccess,
    translateWordFailure,
    languageRequest,
    languageSuccess,
    languageFailure,
} from "@store/actions";
import { combineReducers } from "redux";
import { handleActions } from "redux-actions";

type IsNetworkFetching = boolean;
type HasBeenNetworkFetched = boolean;
type NetworkEror = null | string;

export const isNetworkFetching = handleActions<IsNetworkFetching>(
    {
        [translateWordRequest.toString()]: () => true,
        [languageRequest.toString()]: () => true,

        [translateWordSuccess.toString()]: () => false,
        [languageSuccess.toString()]: () => false,

        [translateWordFailure.toString()]: () => false,
        [languageFailure.toString()]: () => false,
    },
    false
);

export const hasBeenNetworkFetched = handleActions<HasBeenNetworkFetched>(
    {
        [translateWordRequest.toString()]: () => false,
        [languageRequest.toString()]: () => false,

        [translateWordSuccess.toString()]: () => true,
        [languageSuccess.toString()]: () => true,

        [translateWordFailure.toString()]: () => true,
        [languageFailure.toString()]: () => true,
    },
    false
);

export const networkEror = handleActions<NetworkEror>(
    {
        [translateWordRequest.toString()]: () => null,
        [languageRequest.toString()]: () => null,

        [translateWordSuccess.toString()]: () => null,
        [languageSuccess.toString()]: () => null,

        [translateWordFailure.toString()]: (_, action) => action.payload,
        [languageFailure.toString()]: (_, action) => action.payload,
    },
    null
);

export type NetworkFetch = {
    isNetworkFetching: IsNetworkFetching;
    hasBeenNetworkFetched: HasBeenNetworkFetched;
    networkEror: NetworkEror;
};

export default combineReducers({
    isNetworkFetching,
    hasBeenNetworkFetched,
    networkEror,
});
