import { takeLatest, put, call } from "redux-saga/effects";
import { hideNotification, showNotification, showNotificationRequest } from "@store/actions/helpers";

const delay = (time: number) => new Promise((resolve) => setTimeout(resolve, time));

export function* showNotificationSaga() {
    const displayTime = 2000;
    yield call(delay, displayTime);
    yield put(hideNotification());
}

export function* showNotificationWatch() {
    yield takeLatest(showNotification as any, showNotificationSaga);
}
