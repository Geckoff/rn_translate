import * as React from "react";
import { View } from "react-native";
import { Checkbox as PaperCheckbox } from "react-native-paper";
import { CheckboxBusinessLogicObject } from "./useCheckboxBusinessLogic";
import { useCheckboxViewLogic } from "./useCheckboxViewLogic";
import { withTheme, Theme } from "react-native-paper";

export type CheckboxProps = {
    businessLogic: CheckboxBusinessLogicObject;
    theme: Theme;
};

export const CheckboxComponent: React.SFC<CheckboxProps> = ({ businessLogic, ...props }) => {
    const { status, onPress } = useCheckboxViewLogic(businessLogic);

    return (
        <View>
            <PaperCheckbox.Android status={status} onPress={onPress} {...props} />
        </View>
    );
};

export const Checkbox = withTheme(CheckboxComponent);
