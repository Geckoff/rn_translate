import React from "react";
import { View, StyleSheet } from "react-native";
import { Headline, Subheading, withTheme } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { ThemedSFC } from "@styles/types";

export type WordTranslationsHeaderComponentProps = {
    word: string;
    langFrom: string;
    langTo: string;
};

export const WordTranslationsHeaderComponent: ThemedSFC<WordTranslationsHeaderComponentProps> = ({
    theme,
    word,
    langFrom,
    langTo,
}) => {
    const propStyles = StyleSheet.create({
        translationDirectionLangs: {
            color: theme.colors.placeholder,
        },
    });

    return (
        <View>
            <Headline>{word}</Headline>
            <View style={styles.translationDirection}>
                <Subheading style={propStyles.translationDirectionLangs}>{langFrom} </Subheading>
                <View>
                    <Ionicons
                        style={styles.translationDirectionArrow}
                        name="ios-arrow-round-forward"
                        size={27}
                        color={theme.colors.placeholder}
                    />
                </View>
                <Subheading style={propStyles.translationDirectionLangs}> {langTo}</Subheading>
            </View>
        </View>
    );
};

export const WordTranslationsHeader = withTheme(WordTranslationsHeaderComponent);

const styles = StyleSheet.create({
    translationDirection: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: -12,
    },
    translationDirectionArrow: {
        marginTop: 4,
    },
});
