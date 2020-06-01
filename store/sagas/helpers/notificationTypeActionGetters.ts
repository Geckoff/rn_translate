import { showNotification } from "@store/actions/helpers";
import { NotificationInfo, NotificationType } from "@store/actions/helpers";

export type NotificationAction = {
    type: string;
    payload: NotificationInfo;
};
export type NotificationActionGetter = (message: string) => NotificationAction;

const getNotificationAction = (message: string, type: NotificationType): NotificationAction => ({
    type: showNotification.toString(),
    payload: {
        type,
        message,
    },
});

export const showWarningNotification: NotificationActionGetter = (message) => getNotificationAction(message, "warning");
export const showErrorNotification: NotificationActionGetter = (message) => getNotificationAction(message, "danger");
export const showSuccessNotification: NotificationActionGetter = (message) => getNotificationAction(message, "success");
export const showInfoNotification: NotificationActionGetter = (message) => getNotificationAction(message, "info");
