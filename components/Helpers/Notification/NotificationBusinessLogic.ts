import { useSelector } from "react-redux";
import { getNotificationInfo, getIsNotificationVisible } from "@store/reducers";
import { NotificationType } from "@store/actions/helpers";

export type NotificationBusinessLogicObject = {
    notificationType: NotificationType;
    isNotificationVisible: boolean;
};

export const useNotificationBusinessLogic = () => {
    const notificationInfo = useSelector(getNotificationInfo);
    const isNotificationVisible = useSelector(getIsNotificationVisible);

    return {
        notificationInfo,
        isNotificationVisible,
    };
};
