import { getHeaderLeft } from "@components/Helpers/ScreenOptions";

export const getTtranslateWordScreenOptions = (headerTitle: string) => (navData: any) => {
    return {
        headerTitle,
        headerLeft: getHeaderLeft(navData),
    };
};
