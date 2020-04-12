import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Dropdown } from "react-native-material-dropdown";
import { useSelectViewLogic } from "./useSelectViewLogic";
import { SelectBusinessLogicObject } from "./useSelectBusinessLogic";
import { withTheme, Theme } from "react-native-paper";
import { appStyles } from "@styles/styles";

export type SelectProps = {
    businessLogic: SelectBusinessLogicObject;
    theme: Theme;
};

export const SelectComponent: React.SFC<SelectProps> = ({ businessLogic, theme, ...props }) => {
    const styles = StyleSheet.create({
        container: {
            paddingLeft: 20,
        },
    });

    const { ddOptions, displayValue, onChangeText, label } = useSelectViewLogic(businessLogic);

    return (
        <View>
            <Dropdown
                label={label}
                data={ddOptions}
                style={styles.container}
                //overlayStyle={styles.container}
                //containerStyle={styles.container}
                value={displayValue}
                onChangeText={onChangeText}
                fontSize={appStyles.fonts.sizes.regular}
                {...props}
            />
        </View>
    );
};

export const Select = withTheme(SelectComponent);
