import { useNotificationBusinessLogic } from "./NotificationBusinessLogic";
import { TranslateTheme } from "@styles/TranslateTheme";

export type NotificationViewLogicObject = {
    isNotificationVisible: boolean;
    notificationColor: string;
    notificationMessage: string;
};

enum NotificationColors {
    success = "success",
    warning = "warning",
    danger = "error",
    info = "accent",
}

export const useNotificationViewLogic = (theme: TranslateTheme) => {
    const { isNotificationVisible, notificationInfo } = useNotificationBusinessLogic();
    const notificationColor = theme.colors[NotificationColors[notificationInfo.type]];

    return {
        isNotificationVisible,
        notificationColor,
        notificationMessage: notificationInfo.message,
    };
};
