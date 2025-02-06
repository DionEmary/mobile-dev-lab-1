import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

type DecrementProps = {count: number, setCount: (count: number) => void};

const Decrement: React.FC<DecrementProps> = ({count, setCount}) => {

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <View>
            <TouchableOpacity style={styles.button} onPress={decrement}>
                <Text style={styles.buttonText}>
                    Decrement -
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'red',
        padding: 15,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    }
});

export default Decrement;