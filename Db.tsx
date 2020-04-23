import { useState } from "react";
import { createConnection } from "typeorm/browser";
import { Word, Setting, List } from "./db/entities";

const connect = () => {
    return createConnection({
        database: "testtranslate6",
        driver: require("expo-sqlite"),
        entities: [Word, Setting, List],
        synchronize: true,
        type: "expo",
    });
};
export const useConnection = async () => {
    const [isConnected, setIsConnected] = useState(false);
    console.log(isConnected);
    if (!isConnected) {
        setIsConnected(true);
        await connect();
        console.log("db connected");
    }
};
