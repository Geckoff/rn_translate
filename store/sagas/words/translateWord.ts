import { takeLatest, call, put } from "redux-saga/effects";
import { translateWordRequest, translateWordSuccess, translateWordFailure } from "@store/actions/words";
import { translateWord, TranslationResult, TranslateObject } from "@api/translate";
import request from "../request";
import { Action } from "redux";
import { StoreTranslationResult } from "@store/reducers/words";

export interface TranslateWordSagaProp extends Action {
    payload: TranslateObject;
}

export function* translateWordSaga({ payload }: TranslateWordSagaProp) {
    try {
        const translationResult: TranslationResult = yield call(request, translateWord, payload);
        const storeTranslationResult: StoreTranslationResult = {
            ...translationResult,
            langFrom: payload.langFrom,
            langTo: payload.langTo,
        };
        yield put({
            type: translateWordSuccess.toString(),
            payload: storeTranslationResult,
        });
    } catch (error) {
        yield put(translateWordFailure(error));
    }
}

export function* translateWordWatch() {
    yield takeLatest(translateWordRequest as any, translateWordSaga);
}
