import { useLoadingBusinessLogic } from "./LoadingBusinessLogic";

export type LoadingViewLogicObject = {
    shouldShowOverlay: boolean;
    shouldShowLoadingBar: boolean;
};

export const uesLoadingViewLogic = (): LoadingViewLogicObject => {
    const { wordsIsNetworkFetching, languagesIsNetworkFetching } = useLoadingBusinessLogic();

    const shouldShowOverlay = wordsIsNetworkFetching || languagesIsNetworkFetching;

    const shouldShowLoadingBar = shouldShowOverlay;

    return {
        shouldShowOverlay,
        shouldShowLoadingBar,
    };
};
