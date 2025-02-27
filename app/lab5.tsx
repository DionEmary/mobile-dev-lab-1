import React from "react";
import { useState } from "react";
import CallAPI from "../components/callAPI";
import { View, Button } from "react-native";

export default function Lab5() {
    const [showAPI, setShowAPI] = useState(false);
    return (
        <View>
            <Button title="Call API" onPress={() => setShowAPI(!showAPI)} />
            {showAPI && <CallAPI />}
        </View>
    );
}