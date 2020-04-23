import { networkError, clearNetworkErrors } from "../actions/network";
import { handleActions } from "redux-actions";

export type RequestError = string | null;

const requestError = handleActions<RequestError>(
    {
        [networkError.toString()]: (state, action) => action.payload,
        [clearNetworkErrors.toString()]: () => null,
    },
    null
);

export default requestError;
