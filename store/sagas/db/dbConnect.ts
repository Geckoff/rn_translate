import { takeLatest, call, put } from "redux-saga/effects";
import { dbConnectionRequest, dbConnectionSuccess, dbConnectionFailure } from "@store/actions/db";
import { connect } from "@db/dbConnection";
import query from "../db/query";

export function* dbConnectSaga() {
    try {
        yield call(query, connect);
        console.log("db connected");
        yield put(dbConnectionSuccess());
    } catch (error) {
        yield put(dbConnectionFailure(error));
    }
}

export function* dbConnectWatch() {
    yield takeLatest(dbConnectionRequest as any, dbConnectSaga);
}
