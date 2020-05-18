import { useCheckboxBusinessLogic, CheckboxBusinessLogicObject } from "@components/Input/Checkbox";
import { useSelector } from "react-redux";
import { getLists } from "@store/reducers";
import { useState } from "react";
import { List } from "@db/entities";

export type ListToSelect = {
    list: List;
    isSelected: boolean;
    setIsSelected: React.Dispatch<React.SetStateAction<boolean>>;
};

export type ListsPickerBusinessLogicObject = {
    isSelectedCheckboxesBLs: CheckboxBusinessLogicObject[];
    selectedLists: ListToSelect[];
    lists: List[];
};

export const useListsPickerBusinessLogic = (): ListsPickerBusinessLogicObject => {
    const lists = useSelector(getLists);

    const listsToSelect: ListToSelect[] = lists.map((list) => {
        const [isSelected, setIsSelected] = useState(false);
        return {
            list,
            isSelected,
            setIsSelected,
        };
    });

    const isSelectedCheckboxesBLs = listsToSelect.map((listToSelect) =>
        useCheckboxBusinessLogic({
            value: listToSelect.isSelected,
            setValue: listToSelect.setIsSelected,
            label: listToSelect.list.name,
        })
    );

    const selectedLists = listsToSelect.filter((listToSelect) => listToSelect.isSelected);

    return {
        lists,
        isSelectedCheckboxesBLs,
        selectedLists,
    };
};
