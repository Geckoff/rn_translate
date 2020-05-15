import { DbFailure, clearDbErrors } from "@store/actions";
import { combineReducers } from "redux";
import { handleActions, ActionFunctionAny, Action } from "redux-actions";
import { IsDbConnectionBusy, HasBeenDbConnectionBusy, DbError } from "@store/reducers/connectionBusiness";

export type GetDbConnectionBusyReducerTypes<TSuccess, TRequest> = {
    reuqest: ActionFunctionAny<Action<TRequest>>;
    success: ActionFunctionAny<Action<TSuccess>>;
    failure: ActionFunctionAny<Action<DbFailure>>;
};

export const getDbConnectionBusyReducer = <TSuccess, TRequest>({
    reuqest,
    success,
    failure,
}: GetDbConnectionBusyReducerTypes<TSuccess, TRequest>) => {
    const isDbConnectionBusy = handleActions<IsDbConnectionBusy>(
        {
            [reuqest.toString()]: () => true,
            [success.toString()]: () => false,
            [failure.toString()]: () => false,
        },
        false
    );

    const hasBeenDbConnectionBusy = handleActions<HasBeenDbConnectionBusy>(
        {
            [reuqest.toString()]: () => false,
            [success.toString()]: () => true,
            [failure.toString()]: () => true,
        },
        false
    );

    const dbEror = handleActions<DbError>(
        {
            [reuqest.toString()]: () => null,
            [success.toString()]: () => null,
            [failure.toString()]: (_, action) => action.payload,
            [clearDbErrors.toString()]: () => null,
        },
        null
    );

    return combineReducers({
        isDbConnectionBusy,
        hasBeenDbConnectionBusy,
        dbEror,
    });
};
