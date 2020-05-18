import { List } from "./entities";

export const getAllLists = () => {
    return List.find();
};

export const getListById = (id: number) => {
    return List.findOne(id);
};
