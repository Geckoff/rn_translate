import { takeLatest, call, put } from "redux-saga/effects";
import { translateWordRequest, translateWordSuccess, translateWordFailure } from "@store/actions/words";
import { translateWord, TranslationResult, TranslateObject } from "@api/translate";
import request from "../request";
import { Action } from "redux";

export interface TranslateWordSagaProp extends Action {
    payload: TranslateObject;
}

export function* translateWordSaga({ payload }: TranslateWordSagaProp) {
    try {
        const translationResult: TranslationResult = yield call(request, translateWord, payload);
        yield put({
            type: translateWordSuccess.toString(),
            payload: translationResult,
        });
    } catch (error) {
        yield put(translateWordFailure(error));
    }
}

export function* translateWordWatch() {
    yield takeLatest(translateWordRequest, translateWordSaga);
}
