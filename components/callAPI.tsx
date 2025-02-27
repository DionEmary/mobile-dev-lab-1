import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CallAPI() {
    const [data, setData] = useState({ title: '', body: '' });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
                const data = await response.json();
                setData(data);
            } catch (error) {
                setError(error as any);
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    if (loading) return <View style={styles.container}><Text style={styles.text}>Loading...</Text></View>;
    if (error) return <View style={styles.container}><Text style={styles.text}>Error!</Text></View>;
    return (
        <View style={styles.container}>
            {data && (
                <View style={styles.data}>
                    <Text style={styles.title}>{data.title}</Text>
                    <Text style={styles.body}>{data.body}</Text>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 18,
        color: '#ffffff',
    },
    data: {
        padding: 20,
        backgroundColor: '#1e1e1e',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        width: '80%',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 10,
    },
    body: {
        fontSize: 16,
        color: '#b0b0b0',
    },
});