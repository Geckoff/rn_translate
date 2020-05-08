import { takeLatest, put, select } from "redux-saga/effects";
import { networkOnline, networkCheckData } from "@store/actions/network";
import { languagesRequest } from "@store/actions/languages";
import { getLanguages } from "@store/reducers";
import { Languages } from "@store/reducers/languages";

export function* checkFetchedDataSaga() {
    try {
        const langs: Languages = yield select(getLanguages);

        if (langs === null) {
            yield put(languagesRequest());
        }
        yield put(networkOnline());
    } catch (error) {}
}

export function* checkFetchedDataWatch() {
    yield takeLatest(networkCheckData as any, checkFetchedDataSaga);
}
