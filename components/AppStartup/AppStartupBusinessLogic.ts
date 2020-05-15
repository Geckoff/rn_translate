import { dbConnectionRequest } from "@store/actions/db";
import { useDispatch, useSelector } from "react-redux";
import { getDbConnected } from "@store/reducers";

export type AppStartupBusinessLogicObject = {
    dbConnect: () => void;
    isDbConnected: boolean;
};

export const useAppStartupBusinessLogic = (): AppStartupBusinessLogicObject => {
    const dispatch = useDispatch();
    const isDbConnected: boolean = useSelector(getDbConnected);

    const dbConnect = () => {
        dispatch(dbConnectionRequest());
    };

    return {
        dbConnect,
        isDbConnected,
    };
};
