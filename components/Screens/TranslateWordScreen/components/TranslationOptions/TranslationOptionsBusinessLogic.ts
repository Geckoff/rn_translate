import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTextInputBusinessLogic, TextInputBusinessLogicObject } from "@components/Input/TextInput";
import { useRadioBusinessLogic, RadioBusinessLogicObject, Option } from "@components/Input/Radio";
import { TranslatedWord } from "@store/reducers/words";
import { getTranslatedWord } from "@store/reducers";
import { TranslationResult, TranslationOption } from "@api/translate";

export const useTranslationOptionBusinessLogic = () => {
    const translatedWord = useSelector(getTranslatedWord) as TranslationResult;
    const [customTranslation, setCustomTranslation] = useState("");

    const customTranslationTextInputBL: TextInputBusinessLogicObject = useTextInputBusinessLogic({
        value: customTranslation,
        label: "Your Translation",
        setValue: setCustomTranslation,
    });

    const translationOptions: TranslationOption[] = [
        ...translatedWord!.translationOptions,
        { text: customTranslation, pos: "" },
    ];

    // const translationOptionsRadio =

    // const genderRadioBl = useRadioBusinessLogic({
    //     value: gender,
    //     setValue: setGender,
    //     options: [
    //         { display: "Male", value: "male" },
    //         { display: "Female", value: "female" },
    //         { display: "N/A", value: "na" },
    //     ],
    //     isDisabled: true,
    // });
};
