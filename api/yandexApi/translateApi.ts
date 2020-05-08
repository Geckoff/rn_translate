import axios, { AxiosPromise } from "axios";
import { TranslateObject } from "../";
import { FormatTransTranslation, Translate, LangsData } from "./";

const keyTrans = "trnsl.1.1.20181026T211617Z.43ed87828a41aa29.c999292f09c532680a6ec0ca15698b75c408d637";
const instanceTrans = axios.create({
    baseURL: "https://translate.yandex.net/api/v1.5/tr.json/",
});

export const translate: Translate = async ({ langFrom, langTo, word }: TranslateObject) => {
    try {
        const response = await instanceTrans(`translate?key=${keyTrans}&lang=${langFrom}-${langTo}&text=${word}`);
        return response;
    } catch (err) {
        if (err.response.data.code === 501) {
            return err.response;
        }
        throw new Error(err);
    }
};

export const formatTranslation: FormatTransTranslation = (response: any, word: string) => {
    const translationOptions =
        response.text[0] === word
            ? []
            : [
                  {
                      text: response.text[0],
                      pos: "",
                  },
              ];

    return {
        word,
        translationOptions,
    };
};

export const getLangs = (): AxiosPromise<LangsData> => instanceTrans(`getLangs?key=${keyTrans}&ui=en`);
