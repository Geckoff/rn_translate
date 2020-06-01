import { fork } from "redux-saga/effects";
import { translateWordWatch, addWordWatch } from "./words";
import { getLanguagesWatch } from "./languages";
import { checkFetchedDataWatch } from "./network";
import { dbConnectWatch } from "./db";
import { getListsWatch } from "./lists";
import { showNotificationWatch } from "./helpers";

export default function* () {
    yield fork(translateWordWatch);
    yield fork(getLanguagesWatch);
    yield fork(checkFetchedDataWatch);
    yield fork(dbConnectWatch);
    yield fork(getListsWatch);
    yield fork(addWordWatch);
    yield fork(showNotificationWatch);
}
