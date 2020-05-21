import { useSelector } from "react-redux";
import { getNetworkConnectionBusiness, getDbConnectionBusiness } from "@store/reducers";
import { DbConnectionBusiness, NetworkConnectionBusiness } from "@store/reducers/connectionBusiness";

export type LoadingBusinessLogicObject = {
    networkConnectionBusiness: NetworkConnectionBusiness;
    dbConnectionBusiness: DbConnectionBusiness;
};

export const useLoadingBusinessLogic = (): LoadingBusinessLogicObject => {
    const networkConnectionBusiness = useSelector(getNetworkConnectionBusiness);
    const dbConnectionBusiness = useSelector(getDbConnectionBusiness);

    return {
        networkConnectionBusiness,
        dbConnectionBusiness,
    };
};
