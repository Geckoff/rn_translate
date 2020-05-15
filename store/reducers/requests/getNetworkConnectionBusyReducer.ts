import { clearNetworkErrors, NetworkFailure } from "@store/actions";
import { combineReducers } from "redux";
import { handleActions, ActionFunctionAny, Action } from "redux-actions";
import { IsNetworkConnectionBusy, HasBeenNetworkConnectionBusy, NetworkEror } from "@store/reducers/connectionBusiness";

export type GetNetworkConnectionBusyReducerTypes<TSuccess, TRequest> = {
    reuqest: ActionFunctionAny<Action<TRequest>>;
    success: ActionFunctionAny<Action<TSuccess>>;
    failure: ActionFunctionAny<Action<NetworkFailure>>;
};

export const getNetworkConnectionBusyReducer = <TSuccess, TRequest>({
    reuqest,
    success,
    failure,
}: GetNetworkConnectionBusyReducerTypes<TSuccess, TRequest>) => {
    const isNetworkConnectionBusy = handleActions<IsNetworkConnectionBusy>(
        {
            [reuqest.toString()]: () => true,
            [success.toString()]: () => false,
            [failure.toString()]: () => false,
        },
        false
    );

    const hasBeenNetworkConnectionBusy = handleActions<HasBeenNetworkConnectionBusy>(
        {
            [reuqest.toString()]: () => false,
            [success.toString()]: () => true,
            [failure.toString()]: () => true,
        },
        false
    );

    const networkEror = handleActions<NetworkEror>(
        {
            [reuqest.toString()]: () => null,
            [success.toString()]: () => null,
            [failure.toString()]: (_, action) => action.payload,
            [clearNetworkErrors.toString()]: () => null,
        },
        null
    );

    return combineReducers({
        isNetworkConnectionBusy,
        hasBeenNetworkConnectionBusy,
        networkEror,
    });
};
