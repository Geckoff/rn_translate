import { call, put, select } from "redux-saga/effects";
import { clearNetworkErrors, networkError } from "../actions/network";
import { getRequestError } from "../reducers";

export type RequestFn<TResponse> = (args: any) => Promise<TResponse>;

export default function* <TResponse>(fn: RequestFn<TResponse>, args?: any) {
    try {
        const response: TResponse = yield call(fn, args);
        if (yield select(getRequestError)) {
            yield put(clearNetworkErrors());
        }
        return response;
    } catch (error) {
        console.warn(error);
        const errorMessage =
            error && typeof error.message === "string" ? error.message : "Requested resource is not responding";
        yield put(networkError(errorMessage));
        throw error;
    }
}
