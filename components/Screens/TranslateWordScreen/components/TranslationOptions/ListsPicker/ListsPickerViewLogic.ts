import { ListsPickerBusinessLogicObject } from "./ListsPickerBusinessLogic";
import { CheckboxBusinessLogicObject } from "@components/Input/Checkbox";

export type ListPickerVIewLogicObject = {
    isSelectedCheckboxesBLs: CheckboxBusinessLogicObject[];
    selectListError: string;
    availableListsError: string;
    shouldShowAvailableListsError: boolean;
    goToListCreation: () => void;
};

export const useListPickerVIewLogic = (
    listsPickerBusinessLogic: ListsPickerBusinessLogicObject
): ListPickerVIewLogicObject => {
    const { isSelectedCheckboxesBLs, selectedLists, lists } = listsPickerBusinessLogic;

    const selectListError = selectedLists.length === 0 ? "Please, select at least one" : "";
    const availableListsError = "You don't have any lists. Create one and start adding words to it.";
    const shouldShowAvailableListsError = lists.length === 0;

    const goToListCreation = () => {};

    return {
        isSelectedCheckboxesBLs,
        selectListError,
        availableListsError,
        shouldShowAvailableListsError,
        goToListCreation,
    };
};
