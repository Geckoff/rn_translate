import { useNotificationViewLogic } from "./NotificationViewLogic";
import React from "react";
import { withTheme, Snackbar } from "react-native-paper";
import { ThemedSFC } from "@styles/types";

export const NotificationComponent: ThemedSFC = ({ theme }) => {
    const { isNotificationVisible, notificationColor, notificationMessage } = useNotificationViewLogic(theme);

    return (
        <>
            <Snackbar
                style={{ backgroundColor: notificationColor }}
                visible={isNotificationVisible}
                onDismiss={() => {}}
            >
                {notificationMessage}
            </Snackbar>
        </>
    );
};

export const Notification = withTheme(NotificationComponent);
