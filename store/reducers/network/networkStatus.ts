import { networkOffline, networkOnline } from "@store/actions/network";
import { handleActions } from "redux-actions";

export type IsOnline = boolean;

const isOnline = handleActions<IsOnline>(
    {
        [networkOnline.toString()]: () => true,
        [networkOffline.toString()]: () => false,
    },
    true
);

export default isOnline;
