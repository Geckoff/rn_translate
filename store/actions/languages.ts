import { createActions } from "redux-actions";
import { LanguagesInfo } from "@api/translate";
import { NetworkFailure } from ".";

export const { languagesRequest } = createActions<undefined>("LANGUAGES_REQUEST");

export const { languagesSuccess } = createActions<LanguagesInfo>("LANGUAGES_SUCCESS");

export const { languagesFailure } = createActions<NetworkFailure>("LANGUAGES_FAILURE");
