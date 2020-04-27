import React from "react";
import { HeaderButton, HeaderButtonProps } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import { appStyles } from "@styles/styles";

export const CustomHeaderButton: React.SFC<HeaderButtonProps> = (props) => {
    return (
        <HeaderButton
            {...props}
            IconComponent={Ionicons}
            iconSize={appStyles.fonts.sizes.headerIconSize}
            color={appStyles.fonts.colors.drawerFontColor}
        />
    );
};
