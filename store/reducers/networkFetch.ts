import { translateWordRequest, translateWordSuccess, translateWordFailure } from "@store/actions";
import { combineReducers } from "redux";
import { handleActions, Reducer } from "redux-actions";

type IsNetworkFetching = boolean;
type HasBeenNetworkFetched = boolean;
type NetworkEror = null | string;

export const isNetworkFetching = handleActions<IsNetworkFetching, IsNetworkFetching>(
    {
        [translateWordRequest.toString()]: () => true,

        [translateWordSuccess.toString()]: () => false,

        [translateWordFailure.toString()]: () => false,
    },
    false
);

export const hasBeenNetworkFetched = handleActions<HasBeenNetworkFetched, HasBeenNetworkFetched>(
    {
        [translateWordRequest.toString()]: () => false,

        [translateWordSuccess.toString()]: () => true,

        [translateWordFailure.toString()]: () => true,
    },
    false
);

export const networkEror = handleActions<NetworkEror, NetworkEror>(
    {
        [translateWordRequest.toString()]: () => null,

        [translateWordSuccess.toString()]: () => null,

        [translateWordFailure.toString()]: (_, action) => action.payload,
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
