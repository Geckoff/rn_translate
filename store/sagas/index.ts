import { fork } from "redux-saga/effects";
import { translateWordWatch } from "./words";
import { getLanguagesWatch } from "./languages";

export default function* () {
    yield fork(translateWordWatch);
    yield fork(getLanguagesWatch);
}
