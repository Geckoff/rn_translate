import { languagesRequest, languagesSuccess, languagesFailure } from "@store/actions";
import { clearNetworkErrors } from "@store/actions";
import { combineReducers } from "redux";
import { handleActions } from "redux-actions";
import { IsNetworkFetching, HasBeenNetworkFetched, NetworkEror } from "@store/reducers/fetch";

export const isNetworkFetching = handleActions<IsNetworkFetching>(
    {
        [languagesRequest.toString()]: () => true,
        [languagesSuccess.toString()]: () => false,
        [languagesFailure.toString()]: () => false,
    },
    false
);

export const hasBeenNetworkFetched = handleActions<HasBeenNetworkFetched>(
    {
        [languagesRequest.toString()]: () => false,
        [languagesSuccess.toString()]: () => true,
        [languagesFailure.toString()]: () => true,
    },
    false
);

export const networkEror = handleActions<NetworkEror>(
    {
        [languagesRequest.toString()]: () => null,
        [languagesSuccess.toString()]: () => null,
        [languagesFailure.toString()]: (_, action) => action.payload,
        [clearNetworkErrors.toString()]: () => null,
    },
    null
);

export const languagesNetworkFetch = combineReducers({
    isNetworkFetching,
    hasBeenNetworkFetched,
    networkEror,
});
