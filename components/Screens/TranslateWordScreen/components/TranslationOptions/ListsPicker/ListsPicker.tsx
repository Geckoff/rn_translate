import React from "react";
import { ListsPickerBusinessLogicObject } from "./ListsPickerBusinessLogic";
import { useListPickerVIewLogic } from "./ListsPickerViewLogic";
import { Checkbox } from "@components/Input/Checkbox";

export type ListPickerProps = {
    listsPickerBusinessLogic: ListsPickerBusinessLogicObject;
};

export const ListsPicker: React.SFC<ListPickerProps> = ({ listsPickerBusinessLogic }) => {
    const {
        availableListsError,
        isSelectedCheckboxesBLs,
        selectListError,
        shouldShowAvailableListsError,
    } = useListPickerVIewLogic(listsPickerBusinessLogic);

    return (
        <>
            {isSelectedCheckboxesBLs.map((isSelectedCheckboxesBL, i) => (
                <Checkbox businessLogic={isSelectedCheckboxesBL} />
            ))}
        </>
    );
};
