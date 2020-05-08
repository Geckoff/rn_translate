import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Title, Paragraph, Button } from "react-native-paper";
import { appStyles } from "@styles/styles";
import { useWatchConnectionViewLogic } from "./WatchConnectionViewLogic";

export type WatchConnectionProps = {
    message: string;
};

export const WatchConnection: React.SFC<WatchConnectionProps> = ({ message }) => {
    const { shouldShowMessage, handleRefresh } = useWatchConnectionViewLogic();

    return (
        <>
            {shouldShowMessage && (
                <View style={styles.wrapper}>
                    <View style={{ alignItems: "center" }}>
                        <MaterialIcons
                            name={"signal-wifi-off"}
                            size={33}
                            color={appStyles.fonts.colors.noConnectionColor}
                        />
                        <Title style={styles.messageTitle}>No Internet Connection</Title>
                        <Paragraph style={styles.messageText}>{message}</Paragraph>
                    </View>
                </View>
            )}
        </>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: 11,
        backgroundColor: "rgba(0,0,0,0.65)",
        justifyContent: "center",
    },
    messageTitle: {
        color: appStyles.fonts.colors.noConnectionColor,
    },
    messageText: {
        color: appStyles.fonts.colors.noConnectionColor,
    },
    messageWrapper: {
        textAlign: "center",
    },
});
