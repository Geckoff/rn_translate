import { createConnection } from "typeorm/browser";
import { Word, Setting, List } from "./entities";

export const connect = () => {
    return createConnection({
        database: "testtranslate6",
        driver: require("expo-sqlite"),
        entities: [Word, Setting, List],
        synchronize: true,
        type: "expo",
    });
};
