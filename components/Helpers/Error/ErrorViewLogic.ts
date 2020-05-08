import { useErrorBusinessLogic } from "./ErrorBusinessLogic";
import { useEffect } from "react";
import { Alert } from "react-native";

export const uesErrorViewLogic = () => {
    const { requestError, clearError } = useErrorBusinessLogic();

    const shouldShowError = requestError !== null;

    const handleOkay = () => {
        clearError();
    };

    useEffect(() => {
        if (shouldShowError) {
            Alert.alert("Network Error", requestError!, [{ text: "Okay", onPress: handleOkay }]);
        }
    }, [requestError]);
};
