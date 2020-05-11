import React from "react";
import { Caption } from "react-native-paper";
import { withTheme } from "react-native-paper";
import { ThemedSFC } from "@styles/types";

export const ErrorCaptionComponent: ThemedSFC = ({ theme, children, ...props }) => {
    const propStyles = {
        color: theme.colors.error,
    };

    return (
        <Caption {...props} style={propStyles}>
            {children}
        </Caption>
    );
};

export const ErrorCaption = withTheme(ErrorCaptionComponent);
