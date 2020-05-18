import { combineReducers } from "redux";
import { dbConnection } from "@store/reducers/db";
import { listsDbFetch } from "@store/reducers/lists";

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
};

export default combineReducers({
    dbConnection,
    listsDbFetch,
});
