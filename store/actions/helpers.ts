import { createActions } from "redux-actions";

/**
 * Notification
 */
export type NotificationType = "success" | "warning" | "danger" | "info";
export type NotificationInfo = {
    message: string;
    type: NotificationType;
};
export const { showNotificationRequest } = createActions<NotificationInfo>("SHOW_NOTIFICATION_REQUEST");
export const { showNotification } = createActions<NotificationInfo>("SHOW_NOTIFICATION");
export const { hideNotification } = createActions<undefined>("HIDE_NOTIFICATION");
