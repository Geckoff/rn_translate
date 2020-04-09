import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
//import { Button, Checkbox, RadioButton } from "react-native-material-ui";
import { Dropdown } from "react-native-material-dropdown";
import { TextField, FilledTextField, OutlinedTextField } from "react-native-material-textfield";
import { getLangs, translateWord } from "./api";
import { DataTable } from "react-native-paper";
import { Checkbox } from "react-native-paper";
import { TextInput } from "react-native-paper";
import { Table, TableWrapper, Row, Rows, Col } from "react-native-table-component";

export default function App() {
    const state = {
        tableHead: ["Head", "Head2", "Head3", "Head4", "Head5", "Head6", "Head7", "Head8", "Head9"],
        widthArr: [40, 60, 80, 100, 120, 140, 160, 180, 200]
    };
    const tableData = [];
    for (let i = 0; i < 30; i += 1) {
        const rowData = [];
        for (let j = 0; j < 9; j += 1) {
            rowData.push(`${i}${j}`);
        }
        tableData.push(rowData);
    }

    return (
        <View style={styles.container}>
            <ScrollView horizontal={true}>
                <View>
                    <Table borderStyle={{ borderWidth: 1, borderColor: "#C1C0B9" }}>
                        <Row
                            data={state.tableHead}
                            widthArr={state.widthArr}
                            style={styles.header}
                            textStyle={styles.text}
                        />
                    </Table>
                    <ScrollView style={styles.dataWrapper}>
                        <Table borderStyle={{ borderWidth: 1, borderColor: "#C1C0B9" }}>
                            {tableData.map((rowData, index) => (
                                <Row
                                    key={index}
                                    data={rowData}
                                    widthArr={state.widthArr}
                                    style={[styles.row, index % 2 && { backgroundColor: "#F7F6E7" }]}
                                    textStyle={styles.text}
                                />
                            ))}
                        </Table>
                    </ScrollView>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: "#fff" },
    header: { height: 50, backgroundColor: "#537791" },
    text: { textAlign: "center", fontWeight: "100" },
    dataWrapper: { marginTop: -1 },
    row: { height: 40, backgroundColor: "#E7E6E1" }
});
