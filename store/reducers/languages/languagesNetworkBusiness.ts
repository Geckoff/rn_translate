import { languagesRequest, languagesSuccess, languagesFailure } from "@store/actions";
import { getNetworkConnectionBusyReducer } from "@store/reducers/requests";

export const languagesNetworkFetch = getNetworkConnectionBusyReducer({
    reuqest: languagesRequest,
    success: languagesSuccess,
    failure: languagesFailure,
});
