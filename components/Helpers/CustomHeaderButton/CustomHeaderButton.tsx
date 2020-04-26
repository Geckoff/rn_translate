import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import { appStyles } from "@styles/styles";

export const CustomHeaderButton = (props: any) => {
    return (
        <HeaderButton
            {...props}
            IconComponent={Ionicons}
            iconSize={23}
            color={appStyles.fonts.colors.drawerFontColor}
        />
    );
};
