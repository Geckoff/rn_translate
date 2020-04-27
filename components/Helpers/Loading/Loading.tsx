import React from "react";
import { uesLoadingViewLogic } from "./LoadingViewLogic";
import { View, StyleSheet } from "react-native";
import { ProgressBar } from "material-bread";
import { withTheme } from "react-native-paper";
import { ThemedSFC } from "@styles/types";

export const LoadingComponent: ThemedSFC = ({ theme }) => {
    const { shouldShowLoadingBar, shouldShowOverlay } = uesLoadingViewLogic();

    return (
        <>
            {shouldShowOverlay && (
                <View style={styles.overlay}>
                    <ProgressBar
                        trackStyle={styles.progressBar}
                        visible={shouldShowLoadingBar}
                        height={8}
                        color={theme.colors.primary}
                    />
                </View>
            )}
        </>
    );
};

const styles = StyleSheet.create({
    overlay: {
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: 10,
    },
    progressBar: {
        position: "absolute",
        bottom: 0,
    },
});

export const Loading = withTheme(LoadingComponent);
