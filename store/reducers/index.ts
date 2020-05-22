import { combineReducers } from "redux";
import networkConnectionBusiness, { NetworkConnectionBusiness } from "./connectionBusiness/networkConnectionBusiness";
import dbConectionBusiness, { DbConnectionBusiness } from "./connectionBusiness/dbConectionBusiness";
import requestError, { RequestError } from "./requests/requestError";
import words, { Words } from "./words/words";
import languages, { Languages } from "./languages/languages";
import isOnline, { IsOnline } from "./network/networkStatus";
import db, { Db } from "./db/db";
import lists, { Lists } from "./lists/lists";

export type State = {
    networkConnectionBusiness: NetworkConnectionBusiness;
    dbConectionBusiness: DbConnectionBusiness;
    requestError: RequestError;
    words: Words;
    languages: Languages;
    isOnline: IsOnline;
    db: Db;
    lists: Lists;
};

export default combineReducers({
    networkConnectionBusiness,
    dbConectionBusiness,
    requestError,
    words,
    languages,
    isOnline,
    db,
    lists,
});

export const getRequestError = (state: State) => state.requestError;
export const getTranslatedWord = (state: State) => state.words.translatedWord;
export const getLanguages = (state: State) => state.languages;
export const getIsOnline = (state: State) => state.isOnline;
export const getDbConnected = (state: State) => state.db.dbConnected;
export const getDbError = (state: State) => state.db.dbError;
export const getLists = (state: State) => state.lists.lists;

// loading state
export const getDbConnectionBusiness = (state: State) => state.dbConectionBusiness;
export const getNetworkConnectionBusiness = (state: State) => state.networkConnectionBusiness;
export const getListsDbFetch = (state: State) => state.dbConectionBusiness.listsDbFetch;
