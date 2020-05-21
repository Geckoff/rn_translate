import { combineReducers } from "redux";
import { dbConnection } from "@store/reducers/db";
import { listsDbFetch } from "@store/reducers/lists";
import { wordDbAdd } from "@store/reducers/words";

export type IsDbConnectionBusy = boolean;
export type HasBeenDbConnectionBusy = boolean;
export type DbError = null | string;

export type DbConnectionBusinessSection = {
    isDbConnectionBusy: IsDbConnectionBusy;
    hasBeenDbConnectionBusy: HasBeenDbConnectionBusy;
    dbEror: DbError;
};

export type DbConnectionBusiness = {
    dbConnection: DbConnectionBusinessSection;
    listsDbFetch: DbConnectionBusinessSection;
    wordDbAdd: DbConnectionBusinessSection;
};

export default combineReducers({
    dbConnection,
    listsDbFetch,
    wordDbAdd,
});
