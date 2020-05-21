import { addWordSuccess, addWordFailure, addWordRequest } from "@store/actions";
import { getDbConnectionBusyReducer } from "@store/reducers/db";

export const wordDbAdd = getDbConnectionBusyReducer({
    reuqest: addWordRequest,
    success: addWordSuccess,
    failure: addWordFailure,
});
