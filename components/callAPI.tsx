import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CallAPI = () => {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        APICall();
    }, []);

    const APICall = async () => {
        setLoading(true);
        try {
            const response = await fetch(
                'https://jsonplaceholder.typicode.com/posts/1'
            );
            const data = await response.json();
            setData(data);
            console.log(data);
        } catch (error) {
            setError(error as Error);
        } finally {
            setLoading(false);
        };
    };

    return (
        <View style={styles.container}>
            {data && (
                <View>
                    <Text style={styles.title}>{data.title}</Text>
                    <Text style={styles.body}>{data.body}</Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        margin: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    body: {
        fontSize: 16,
    },
});

export default CallAPI;