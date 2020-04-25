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
        yield put(networkError(error));
        throw error;
    }
}
