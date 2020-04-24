import { useDispatch } from "react-redux";
import { translateWordRequest, translateWordReset } from "@store/actions/words";

export const useTranslateWordScreenBusinessLogic = () => {
    const dispatch = useDispatch();

    const translateWord = () => {
        dispatch(
            translateWordRequest({
                langFrom: "en",
                langTo: "ru",
                word: "check",
            })
        );
    };

    const resetWord = () => {
        dispatch(translateWordReset());
    };

    return {
        translateWord,
        resetWord,
    };
};
