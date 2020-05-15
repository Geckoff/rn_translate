import { useEffect } from "react";
import { useAppStartupBusinessLogic } from "./AppStartupBusinessLogic";

export type AppStartupViewLogicObject = {
    shouldLoadNavigator: boolean;
};

export const useAppStartupViewLogic = (): AppStartupViewLogicObject => {
    const { dbConnect, isDbConnected } = useAppStartupBusinessLogic();

    useEffect(dbConnect, []);

    return {
        shouldLoadNavigator: isDbConnected,
    };
};
