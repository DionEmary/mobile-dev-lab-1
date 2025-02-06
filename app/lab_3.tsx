import { Button, StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import React from 'react';
import { useState } from 'react';
import Increment from '../components/increment';
import Decrement from '../components/decrement';
import { Link } from 'expo-router';

export default function Lab3() {
    const [count, setCount] = useState<number>(0);

    return (
        <View style={styles.container}>
            <Text style={styles.countText}>Value: {count}</Text>
            <View style={styles.buttonContainer}>
                <Increment count={count} setCount={setCount} />
                <Decrement count={count} setCount={setCount} />  
            </View>
            <Link style={styles.back} href="/">Home</Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    countText: {
        fontSize: 20,
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '70%',
    },
    back: {
        fontSize: 18,
        marginTop: 20,
        color: 'blue',
    }
});