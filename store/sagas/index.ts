import { fork } from "redux-saga/effects";
import { translateWordWatch } from "./words";

export default function* () {
    yield fork(translateWordWatch);
}
