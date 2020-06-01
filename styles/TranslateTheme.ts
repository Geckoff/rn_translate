import { DefaultTheme, Colors, Theme } from "react-native-paper";

export type TranslateTheme = Theme & {
    colors: {
        primary: string;
        background: string;
        surface: string;
        accent: string;
        error: string;
        text: string;
        onSurface: string;
        onBackground: string;
        disabled: string;
        placeholder: string;
        backdrop: string;
        notification: string;
        warning: string;
        success: string;
    };
};

const TranslateTheme: TranslateTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        warning: Colors.yellowA700,
        success: Colors.greenA700,
    },
};

export default TranslateTheme;
