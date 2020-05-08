import { useSelector, useDispatch } from "react-redux";
import { getRequestError } from "@store/reducers";
import { RequestError } from "@store/reducers/requests/requestError";
import { clearNetworkErrors } from "@store/actions/network";

export type ErrorBusinessLogicObject = {
    requestError: RequestError;
    clearError: () => void;
};

export const useErrorBusinessLogic = (): ErrorBusinessLogicObject => {
    const requestError: RequestError = useSelector(getRequestError);
    const dispatch = useDispatch();

    const clearError = () => {
        dispatch(clearNetworkErrors());
    };

    return {
        requestError,
        clearError,
    };
};
