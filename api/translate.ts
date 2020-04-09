import { yandexTranslate, yandexGetLangs } from "./yandexApi/yandexApi";

export type TranslateObject = {
    langFrom: string;
    langTo: string;
    word: string;
};
export type TranslationOption = {
    text: string;
    pos: string;
};
export type TranslationResult = {
    word: string;
    translationOptions: TranslationOption[];
};
export type ApiTranslate = (translateObject: TranslateObject) => Promise<TranslationResult>;
export type LanguagesInfo = {
    dirs: string[][];
    langs: { [key: string]: string };
};
export type GetLanguages = () => Promise<LanguagesInfo>;

export const translateWordFn = (translateObject: TranslateObject, apiTranslate: ApiTranslate) =>
    apiTranslate(translateObject);

export const translateWord: ApiTranslate = (translateObject: TranslateObject) =>
    translateWordFn(translateObject, yandexTranslate);

export const getLangs: GetLanguages = () => yandexGetLangs();
