import { dbConnectionRequest, dbConnectionSuccess, dbConnectionFailure } from "@store/actions";
import { getDbConnectionBusyReducer } from "./getDbConnectionBusyReducer";

export const dbConnection = getDbConnectionBusyReducer({
    reuqest: dbConnectionRequest,
    success: dbConnectionSuccess,
    failure: dbConnectionFailure,
});
