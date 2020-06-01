import { takeLatest, call, put } from "redux-saga/effects";
import { addWordFailure, addWordRequest, addWordSuccess } from "@store/actions/words";
import { showNotification } from "@store/actions/helpers";
import query from "../db/query";
import { Word } from "@db/entities";
import { addWord } from "@db/words";
import { Action } from "redux";
import { showSuccessNotification } from "@store/sagas/helpers";

export interface AddWordSagaProps extends Action {
    payload: Word;
}

export function* addWordSaga({ payload }: AddWordSagaProps) {
    try {
        yield call(query, addWord, payload);
        yield put(addWordSuccess());
        yield put(showSuccessNotification("TESTEST"));
    } catch (error) {
        yield put(addWordFailure(error));
    }
}

export function* addWordWatch() {
    yield takeLatest(addWordRequest as any, addWordSaga);
}
