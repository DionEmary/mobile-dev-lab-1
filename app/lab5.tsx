import React from "react";
import { useState } from "react";
import CallAPI from "../components/callAPI";
import { View, Button, StyleSheet } from "react-native";

export default function Lab5() {
    const [showAPI, setShowAPI] = useState(false);
    return (
        <View>
            <Button title="Call API" onPress={() => setShowAPI(!showAPI)} />
            {showAPI && <CallAPI />}
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        paddingTop: 100,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    list: {
        marginTop: 30,
    },
    items: {
        fontSize: 20,
    }
})