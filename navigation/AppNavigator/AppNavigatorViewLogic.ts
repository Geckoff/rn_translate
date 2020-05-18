import { useEffect } from "react";
import { useAppNavigatorBusinessLogic } from "./AppNavigatorBusinessLogic";

export type AppNavigatorViewLogicObject = {
    shouldShowNavigation: boolean;
};

export const useAppNavigatorViewLogic = () => {
    const { hasBeenListsFetched, loadLists } = useAppNavigatorBusinessLogic();

    useEffect(loadLists, []);

    return {
        shouldShowNavigation: hasBeenListsFetched,
    };
};
