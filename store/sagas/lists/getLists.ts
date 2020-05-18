import { takeLatest, call, put } from "redux-saga/effects";
import { getListsFailure, getListsRequest, getListsSuccess } from "@store/actions/lists";
import { getAllLists } from "@db/lists";
import query from "../db/query";
import { List } from "@db/entities";

export function* getListsSaga() {
    try {
        const lists: List[] = yield call(query, getAllLists);
        yield put(getListsSuccess(lists));
    } catch (error) {
        yield put(getListsFailure(error));
    }
}

export function* getListsWatch() {
    yield takeLatest(getListsRequest as any, getListsSaga);
}
