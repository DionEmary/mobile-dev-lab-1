import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import CallAPI from '../components/callAPI';    

export default function Lab5() {
    const [view, setView] = useState<boolean>(false);

    const viewData = () => {
        if(view) {
            setView(false);
        }
        else {
            setView(true);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Lab 5 - API Data</Text>
            <View style={styles.dataContainer}>
                {view && <CallAPI />}
            </View>
            <Button title="View Data" onPress={viewData}></Button>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: "#f0f0f0",
    },
    dataContainer: {
        padding: 10,
        margin: 10,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
    },
    header: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center",
    }
  });

