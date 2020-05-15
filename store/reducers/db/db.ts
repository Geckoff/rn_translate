import { dbConnectionFailure, dbConnectionSuccess, dbError as dbErrorAction, clearDbErrors } from "@store/actions";
import { combineReducers } from "redux";
import { handleActions } from "redux-actions";

export type DbError = string | null;

const dbConnected = handleActions<boolean>(
    {
        [dbConnectionFailure.toString()]: () => false,
        [dbConnectionSuccess.toString()]: () => true,
    },
    false
);

const dbError = handleActions<DbError>(
    {
        [dbErrorAction.toString()]: (_, action) => action.payload,
        [clearDbErrors.toString()]: () => null,
    },
    null
);

export type Db = {
    dbConnected: boolean;
    dbError: DbError;
};

export default combineReducers({
    dbConnected,
    dbError,
});
