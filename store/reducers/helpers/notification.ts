import { hideNotification, showNotification, NotificationType, NotificationInfo } from "@store/actions";
import { combineReducers } from "redux";
import { handleActions } from "redux-actions";

export const isNotificationVisible = handleActions<any>(
    {
        [hideNotification.toString()]: () => false,
        [showNotification.toString()]: () => true,
    },
    false
);

export const notificationInfo = handleActions<NotificationInfo>(
    {
        [showNotification.toString()]: (_, action) => action.payload,
    },
    {
        type: "success",
        message: "",
    }
);

export type Notification = {
    isNotificationVisible: boolean;
    notificationInfo: NotificationInfo;
};

export default combineReducers({
    isNotificationVisible,
    notificationInfo,
});
