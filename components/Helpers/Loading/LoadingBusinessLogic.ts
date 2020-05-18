import { useSelector } from "react-redux";
import { getWordsNetworkFetch, getLanguagesNetworkFetch, getDbConnection, getListsDbFetch } from "@store/reducers";
import { NetworkConnectionBusinessSection } from "@store/reducers/connectionBusiness";
import { DbConnectionBusinessSection } from "@store/reducers/connectionBusiness";

export type LoadingBusinessLogicObject = {
    wordsIsNetworkFetching: boolean;
    languagesIsNetworkFetching: boolean;
    isDbConnecting: boolean;
    isListsFetching: boolean;
};

export const useLoadingBusinessLogic = (): LoadingBusinessLogicObject => {
    const wordsNetworkFetch: NetworkConnectionBusinessSection = useSelector(getWordsNetworkFetch);
    const languagesNetworkFetch: NetworkConnectionBusinessSection = useSelector(getLanguagesNetworkFetch);
    const dbConnection: DbConnectionBusinessSection = useSelector(getDbConnection);
    const listsDbFetch: DbConnectionBusinessSection = useSelector(getListsDbFetch);

    return {
        wordsIsNetworkFetching: wordsNetworkFetch.isNetworkConnectionBusy,
        languagesIsNetworkFetching: languagesNetworkFetch.isNetworkConnectionBusy,
        isDbConnecting: dbConnection.isDbConnectionBusy,
        isListsFetching: listsDbFetch.isDbConnectionBusy,
    };
};
