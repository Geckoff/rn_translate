import { getListsRequest, getListsSuccess, getListsFailure } from "@store/actions/lists";
import { handleActions } from "redux-actions";
import { combineReducers } from "redux";
import { List } from "@db/entities";

const lists = handleActions<List[]>(
    {
        [getListsRequest.toString()]: () => [],
        [getListsSuccess.toString()]: (_, action) => action.payload,
        [getListsFailure.toString()]: () => [],
    },
    []
);

export type Lists = {
    lists: List[];
};

export default combineReducers({
    lists,
});
