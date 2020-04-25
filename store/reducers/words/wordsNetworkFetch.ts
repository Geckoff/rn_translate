import { translateWordRequest, translateWordSuccess, translateWordFailure } from "@store/actions";
import { combineReducers } from "redux";
import { handleActions } from "redux-actions";
import { IsNetworkFetching, HasBeenNetworkFetched, NetworkEror } from "@store/reducers/fetch";

export const isNetworkFetching = handleActions<IsNetworkFetching>(
    {
        [translateWordRequest.toString()]: () => true,
        [translateWordSuccess.toString()]: () => false,
        [translateWordFailure.toString()]: () => false,
    },
    false
);

export const hasBeenNetworkFetched = handleActions<HasBeenNetworkFetched>(
    {
        [translateWordRequest.toString()]: () => false,
        [translateWordSuccess.toString()]: () => true,
        [translateWordFailure.toString()]: () => true,
    },
    false
);

export const networkEror = handleActions<NetworkEror>(
    {
        [translateWordRequest.toString()]: () => null,
        [translateWordSuccess.toString()]: () => null,
        [translateWordFailure.toString()]: (_, action) => action.payload,
    },
    null
);

export const wordsNetworkFetch = combineReducers({
    isNetworkFetching,
    hasBeenNetworkFetched,
    networkEror,
});
