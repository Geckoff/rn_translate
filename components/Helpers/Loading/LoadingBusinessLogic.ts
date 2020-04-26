import { useSelector } from "react-redux";
import { getWordsNetworkFetch, getLanguagesNetworkFetch } from "@store/reducers";
import { NetworkFetchSection } from "@store/reducers/fetch";

export type LoadingBusinessLogicObject = {
    wordsIsNetworkFetching: boolean;
    languagesIsNetworkFetching: boolean;
};

export const useLoadingBusinessLogic = (): LoadingBusinessLogicObject => {
    const wordsNetworkFetch: NetworkFetchSection = useSelector(getWordsNetworkFetch);
    const languagesNetworkFetch: NetworkFetchSection = useSelector(getLanguagesNetworkFetch);

    return {
        wordsIsNetworkFetching: wordsNetworkFetch.isNetworkFetching,
        languagesIsNetworkFetching: languagesNetworkFetch.isNetworkFetching,
    };
};
