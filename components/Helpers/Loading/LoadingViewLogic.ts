import { useLoadingBusinessLogic } from "./LoadingBusinessLogic";

export type LoadingViewLogicObject = {
    shouldShowOverlay: boolean;
    shouldShowLoadingBar: boolean;
};

export const uesLoadingViewLogic = (): LoadingViewLogicObject => {
    const { wordsIsNetworkFetching, languagesIsNetworkFetching, isDbConnecting } = useLoadingBusinessLogic();

    const shouldShowLoadingBar = wordsIsNetworkFetching || languagesIsNetworkFetching;

    const shouldShowOverlay = shouldShowLoadingBar || isDbConnecting;

    return {
        shouldShowOverlay,
        shouldShowLoadingBar,
    };
};
