import axios from "axios";
import { TranslateObject } from "../";
import { FormatTransTranslation, Translate } from "./";
import { ActivityIndicatorComponent } from "react-native";

const keyDict = "dict.1.1.20181026T231057Z.2ae7b2159b6e0f44.1b76f2af5640739f6fd89d91834369f1788a54fb";
const instanceDict = axios.create({
    baseURL: "https://dictionary.yandex.net/api/v1/dicservice.json/",
});

export const translate = async ({ langFrom, langTo, word }: TranslateObject) => {
    try {
        const response = await instanceDict(`lookup?key=${keyDict}&lang=${langFrom}-${langTo}&text=${word}`);
        console.log(response);
        return response;
    } catch (err) {
        if (err.response.data.code === 501) {
            return err.response;
        }
        throw new Error(err);
    }
};

export const formatTranslation: FormatTransTranslation = (response: any, word: string) => {
    const translationOptions = response.def
        .map((defenition: any) => defenition.tr)
        .reduce((acc: any[], curVal: any[]) => {
            return [...acc, ...curVal];
        }, [])
        .map((translation: any) => {
            return {
                text: translation.text,
                pos: translation.pos,
            };
        });

    return {
        word,
        translationOptions,
    };
};
