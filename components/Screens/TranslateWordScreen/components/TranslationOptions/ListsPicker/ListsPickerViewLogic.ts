import { ListsPickerBusinessLogicObject } from "./ListsPickerBusinessLogic";
import { CheckboxBusinessLogicObject } from "@components/Input/Checkbox";

export type ListPickerVIewLogicObject = {
    isSelectedCheckboxesBLs: CheckboxBusinessLogicObject[];
    selectListError: string;
    availableListsError: string;
    shouldShowAvailableListsError: boolean;
};

export const useListPickerVIewLogic = (listsPickerBusinessLogic: ListsPickerBusinessLogicObject) => {
    const { isSelectedCheckboxesBLs, selectedLists, lists } = listsPickerBusinessLogic;

    const selectListError = selectedLists.length === 0 ? "At least one list should be selected" : "";

    const availableListsError = "Please, create a list first";

    const shouldShowAvailableListsError = lists.length === 0;

    return {
        isSelectedCheckboxesBLs,
        selectListError,
        availableListsError,
        shouldShowAvailableListsError,
    };
};
