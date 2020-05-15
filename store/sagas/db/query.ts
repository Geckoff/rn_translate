import { call, put, select } from "redux-saga/effects";
import { clearDbErrors, dbError } from "../../actions/db";
import { getDbError } from "../../reducers";

export type QueryFn<TResponse> = (args: any) => Promise<TResponse>;

export default function* <TResponse>(fn: QueryFn<TResponse>, args?: any) {
    try {
        const response: TResponse = yield call(fn, args);
        if (yield select(getDbError)) {
            yield put(clearDbErrors());
        }
        return response;
    } catch (error) {
        console.warn(error);
        const errorMessage =
            typeof error === "string"
                ? error
                : error && typeof error.message === "string"
                ? error.message
                : "Device database error occured";
        yield put(dbError(errorMessage));
        throw error;
    }
}
