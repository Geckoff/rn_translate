import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { CustomHeaderButton } from "@components/Helpers/CustomHeaderButton";

export const getHeaderLeft = (navData: any) => () => (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
            title="Menu"
            iconName="md-menu"
            onPress={() => {
                navData.navigation.toggleDrawer();
            }}
        />
    </HeaderButtons>
);
