import * as dictionaryApi from "./dictionaryApi";
import * as translateApi from "./translateApi";
import { Errors } from "./errors";
import { TranslateObject, TranslationResult } from "../";
import { AxiosPromise } from "axios";

export type FormatTransTranslation = (response: any, word: string) => TranslationResult;
export type Translate = (translateObject: TranslateObject) => AxiosPromise<any>;
export type YandexTranslateApi = {
    translate: Translate;
    formatTranslation: FormatTransTranslation;
};
export type LangsData = {
    dirs: string[];
    langs: { [key: string]: string };
};

export const yandexTranslateFn = async (
    translateObject: TranslateObject,
    translateApi: YandexTranslateApi,
    dictionaryApi: YandexTranslateApi
) => {
    let translation: TranslationResult;

    try {
        let response = await dictionaryApi.translate(translateObject);
        if (response.data.code === 501) {
            response = await translateApi.translate(translateObject);

            if (response.data.code === 501) {
                throw new Error(Errors.LANG_SUPPORT_ERR);
            }
            translation = translateApi.formatTranslation(response.data, translateObject.word);
        } else {
            translation = dictionaryApi.formatTranslation(response.data, translateObject.word);
        }

        return translation;
    } catch (err) {
        if (Object.values(Errors).includes(err.message)) {
            throw new Error(err.message);
        }
        throw new Error(Errors.API_ERR);
    }
};

export const yandexTranslate = (translateObject: TranslateObject) =>
    yandexTranslateFn(translateObject, translateApi, dictionaryApi);

export const yandexGetLangs = async () => {
    try {
        const langsData = await translateApi.getLangs();
        const dirs = langsData.data.dirs.map((dir: string) => dir.split("-"));
        const availableLangs = dirs.map((dir: string[]) => dir[0]);
        const langs = getLangsNames(langsData.data, availableLangs);

        return {
            dirs,
            langs
        };
    } catch (err) {
        console.log(err);
        throw new Error(Errors.LANGS_FETCH_ERR);
    }
};

export const getLangsNames = (langsData: LangsData, availableLangs: string[]) => {
    const langs: { [key: string]: string } = {};
    Object.entries(langsData.langs)
        .filter(langEntry => availableLangs.includes(langEntry[0]))
        .forEach((langEntry: any) => {
            langs[langEntry[0]] = langEntry[1];
        });
    return langs;
};
