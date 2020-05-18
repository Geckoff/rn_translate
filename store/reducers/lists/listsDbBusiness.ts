import { getListsRequest, getListsSuccess, getListsFailure } from "@store/actions";
import { getDbConnectionBusyReducer } from "@store/reducers/db";

export const listsDbFetch = getDbConnectionBusyReducer({
    reuqest: getListsRequest,
    success: getListsSuccess,
    failure: getListsFailure,
});
