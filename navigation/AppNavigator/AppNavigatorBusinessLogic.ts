import { useDispatch, useSelector } from "react-redux";
import { getListsRequest } from "@store/actions/lists";
import { getListsDbFetch } from "@store/reducers";

export type AppNavigatorBusinessLogicObject = {
    loadLists: () => void;
    hasBeenListsFetched: boolean;
};

export const useAppNavigatorBusinessLogic = (): AppNavigatorBusinessLogicObject => {
    const dispatch = useDispatch();
    const listsDbFetch = useSelector(getListsDbFetch);
    const hasBeenListsFetched = listsDbFetch.hasBeenDbConnectionBusy;

    const loadLists = () => {
        dispatch(getListsRequest());
    };

    return {
        hasBeenListsFetched,
        loadLists,
    };
};
