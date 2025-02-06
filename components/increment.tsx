import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

type IncrementProps = {count: number, setCount: (count: number) => void};

const Increment: React.FC<IncrementProps> = ({count, setCount}) => {

    const increment = () => {
        setCount(count + 1);
    };

    return (
        <View>
            <TouchableOpacity style={styles.button} onPress={increment}>
                <Text style={styles.buttonText}>
                    Increment +
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'green',
        padding: 15,
        marginLeft: 5,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    }
});

export default Increment;