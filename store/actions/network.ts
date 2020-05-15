import { createActions } from "redux-actions";

export type NetworkFailure = undefined | string;

export const { networkError } = createActions<string>("NETWORK_ERROR");
export const { clearNetworkErrors } = createActions<undefined>("CLEAR_NETWORK_ERRORS");

export const { networkOnline, networkOffline, networkCheckData } = createActions<undefined>(
    "NETWORK_ONLINE",
    "NETWORK_OFFLINE",
    "NETWORK_CHECK_DATA"
);
