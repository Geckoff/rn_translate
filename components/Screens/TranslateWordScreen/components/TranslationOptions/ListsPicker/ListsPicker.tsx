import React from "react";
import { ListsPickerBusinessLogicObject } from "./ListsPickerBusinessLogic";
import { useListPickerVIewLogic } from "./ListsPickerViewLogic";
import { Checkbox } from "@components/Input/Checkbox";
import { Title, Paragraph, Button } from "react-native-paper";
import { View, StyleSheet } from "react-native";
import { ErrorCaption } from "@components/Input/ErrorCaption";

export type ListPickerProps = {
    listsPickerBusinessLogic: ListsPickerBusinessLogicObject;
};

export const ListsPicker: React.SFC<ListPickerProps> = ({ listsPickerBusinessLogic }) => {
    const {
        availableListsError,
        isSelectedCheckboxesBLs,
        selectListError,
        shouldShowAvailableListsError,
        goToListCreation,
    } = useListPickerVIewLogic(listsPickerBusinessLogic);

    return (
        <View style={styles.listPicker}>
            <Title style={styles.listsTitle}>
                Lists <ErrorCaption>{selectListError}</ErrorCaption>
            </Title>

            {shouldShowAvailableListsError ? (
                <View style={styles.createList}>
                    <Paragraph style={styles.noListsParagraph}>{availableListsError}</Paragraph>
                    <Button onPress={goToListCreation} mode="outlined">
                        Create List
                    </Button>
                </View>
            ) : (
                isSelectedCheckboxesBLs.map((isSelectedCheckboxesBL, i) => (
                    <Checkbox businessLogic={isSelectedCheckboxesBL} />
                ))
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    listPicker: {
        marginTop: 18,
    },
    noListsParagraph: {
        marginBottom: 10,
    },
    createList: {
        marginBottom: 5,
    },
    listsTitle: {
        paddingTop: 2,
    },
});
