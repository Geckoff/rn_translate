import { takeLatest, call, put } from "redux-saga/effects";
import { languagesRequest, languagesSuccess, languagesFailure } from "@store/actions/languages";
import { getLangs, LanguagesInfo } from "@api/translate";
import request from "../network/request";

export function* getLanguagesSaga() {
    try {
        const languages: LanguagesInfo = yield call(request, getLangs);
        yield put({
            type: languagesSuccess.toString(),
            payload: languages,
        });
    } catch (error) {
        yield put(languagesFailure(error));
    }
}

export function* getLanguagesWatch() {
    yield takeLatest(languagesRequest as any, getLanguagesSaga);
}
