import { useSelector } from "react-redux";
import { getWordsNetworkFetch, getLanguagesNetworkFetch, getDbConnection } from "@store/reducers";
import { NetworkConnectionBusinessSection } from "@store/reducers/connectionBusiness";
import { DbConnectionBusinessSection } from "@store/reducers/connectionBusiness";

export type LoadingBusinessLogicObject = {
    wordsIsNetworkFetching: boolean;
    languagesIsNetworkFetching: boolean;
    isDbConnecting: boolean;
};

export const useLoadingBusinessLogic = (): LoadingBusinessLogicObject => {
    const wordsNetworkFetch: NetworkConnectionBusinessSection = useSelector(getWordsNetworkFetch);
    const languagesNetworkFetch: NetworkConnectionBusinessSection = useSelector(getLanguagesNetworkFetch);
    const dbConnection: DbConnectionBusinessSection = useSelector(getDbConnection);

    return {
        wordsIsNetworkFetching: wordsNetworkFetch.isNetworkConnectionBusy,
        languagesIsNetworkFetching: languagesNetworkFetch.isNetworkConnectionBusy,
        isDbConnecting: dbConnection.isDbConnectionBusy,
    };
};
