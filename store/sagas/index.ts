import { fork } from "redux-saga/effects";
import { translateWordWatch } from "./words";
import { getLanguagesWatch } from "./languages";
import { checkFetchedDataWatch } from "./network";
import { dbConnectWatch } from "./db";
import { getListsWatch } from "./lists";

export default function* () {
    yield fork(translateWordWatch);
    yield fork(getLanguagesWatch);
    yield fork(checkFetchedDataWatch);
    yield fork(dbConnectWatch);
    yield fork(getListsWatch);
}
