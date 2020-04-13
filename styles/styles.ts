import { constants } from "./constants";

const { regularFontSIze } = constants;

export const appStyles = {
    fonts: {
        sizes: {
            regular: regularFontSIze,
        },
    },
    styleBlocks: {
        disablingBlock: {
            position: "absolute",
            width: "100%",
            height: "100%",
            zIndex: 10,
        },
    },
};
