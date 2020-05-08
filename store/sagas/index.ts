import { fork } from "redux-saga/effects";
import { translateWordWatch } from "./words";
import { getLanguagesWatch } from "./languages";
import { checkFetchedDataWatch } from "./network";

export default function* () {
    yield fork(translateWordWatch);
    yield fork(getLanguagesWatch);
    yield fork(checkFetchedDataWatch);
}
