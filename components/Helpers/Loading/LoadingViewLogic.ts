import { useLoadingBusinessLogic } from "./LoadingBusinessLogic";
import { DbConnectionBusiness, NetworkConnectionBusiness } from "@store/reducers/connectionBusiness";

export type LoadingViewLogicObject = {
    shouldShowOverlay: boolean;
    shouldShowLoadingBar: boolean;
};

export const uesLoadingViewLogic = (): LoadingViewLogicObject => {
    const { networkConnectionBusiness, dbConnectionBusiness } = useLoadingBusinessLogic();

    let isDbConnectionBusy = false;
    for (const dbConnectionBusinessSection in dbConnectionBusiness) {
        if (dbConnectionBusiness[dbConnectionBusinessSection as keyof DbConnectionBusiness].isDbConnectionBusy) {
            isDbConnectionBusy = true;
        }
    }

    let isNetworkConnectionBusy = false;
    for (const networkConnectionBusinessSection in networkConnectionBusiness) {
        if (
            networkConnectionBusiness[networkConnectionBusinessSection as keyof NetworkConnectionBusiness]
                .isNetworkConnectionBusy
        ) {
            isNetworkConnectionBusy = true;
        }
    }

    const shouldShowLoadingBar = isNetworkConnectionBusy;
    const shouldShowOverlay = shouldShowLoadingBar || isDbConnectionBusy;

    return {
        shouldShowOverlay,
        shouldShowLoadingBar,
    };
};
