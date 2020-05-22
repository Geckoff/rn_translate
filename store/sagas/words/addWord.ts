import { takeLatest, call, put } from "redux-saga/effects";
import { addWordFailure, addWordRequest, addWordSuccess } from "@store/actions/words";
import query from "../db/query";
import { Word } from "@db/entities";
import { addWord } from "@db/words";
import { Action } from "redux";

export interface AddWordSagaProps extends Action {
    payload: Word;
}

export function* addWordSaga({ payload }: AddWordSagaProps) {
    try {
        yield call(query, addWord, payload);
        yield put(addWordSuccess());
    } catch (error) {
        yield put(addWordFailure(error));
    }
}

export function* addWordWatch() {
    yield takeLatest(addWordRequest as any, addWordSaga);
}
