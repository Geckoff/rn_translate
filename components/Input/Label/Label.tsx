import React from "react";
import { Paragraph } from "react-native-paper";
import { withTheme } from "react-native-paper";
import { ThemedSFC } from "@styles/types";

export const LabelComponent: ThemedSFC = ({ theme, children }) => {
    const propStyles = {
        color: theme.colors.placeholder,
    };

    return <Paragraph style={propStyles}>{children}</Paragraph>;
};

export const Label = withTheme(LabelComponent);
