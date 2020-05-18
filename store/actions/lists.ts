import { createActions } from "redux-actions";
import { DbFailure } from "@store/actions/db";
import { List } from "@db/entities";
/**
 * Get lists
 */
export const { getListsRequest } = createActions<undefined>("GET_LISTS_REQUEST");
export const { getListsSuccess } = createActions<List[]>("GET_LISTS_SUCCESS");
export const { getListsFailure } = createActions<DbFailure>("GET_LISTS_FAILURE");
