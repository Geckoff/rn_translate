import { createActions } from "redux-actions";

export const { networkError, clearNetworkErrors } = createActions<undefined>("NETWORK_ERROR", "CLEAR_NETWORK_ERRORS");

export const { networkOnline, networkOffline, networkCheckData } = createActions<undefined>(
    "NETWORK_ONLINE",
    "NETWORK_OFFLINE",
    "NETWORK_CHECK_DATA"
);
