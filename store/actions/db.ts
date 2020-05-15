import { createActions } from "redux-actions";

export type DbFailure = undefined | string;

export const { dbError } = createActions<string>("DB_ERROR");
export const { clearDbErrors } = createActions<undefined>("CLEAR_DB_ERRORS");

export const { dbConnectionRequest, dbConnectionSuccess } = createActions<undefined>(
    "DB_CONNECTION_REQUEST",
    "DB_CONNECTION_SUCCESS",
    "DB_CONNECTION_FAILURE"
);

export type DbConnectionFailurePayload = undefined | string;

export const { dbConnectionFailure } = createActions<undefined | string>("DB_CONNECTION_FAILURE");
