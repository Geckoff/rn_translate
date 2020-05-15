import { translateWordRequest, translateWordSuccess, translateWordFailure } from "@store/actions";
import { getNetworkConnectionBusyReducer } from "@store/reducers/requests";

export const wordsNetworkFetch = getNetworkConnectionBusyReducer({
    reuqest: translateWordRequest,
    success: translateWordSuccess,
    failure: translateWordFailure,
});
