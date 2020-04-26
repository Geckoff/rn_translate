import { constants } from "./constants";
import { StyleSheet } from "react-native";

const { regularFontSIze, white } = constants;

export const appStyles = {
    fonts: {
        sizes: {
            regular: regularFontSIze,
        },
        colors: {
            drawerFontColor: white,
        },
    },
    styleBlocks: StyleSheet.create({
        disablingBlock: {
            position: "absolute",
            width: "100%",
            height: "100%",
            zIndex: 10,
        },
        headerStackNav: {
            color: white,
            marginHorizontal: 15,
        },
    }),
};
