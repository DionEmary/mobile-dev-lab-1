import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

export default function CallAPI()
{
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

    if (loading) return <View><Text>Loading...</Text></View>;
    if (error) return <View>Error!</View>;
    return (
        <View>
            {data && (
                <View>
                    <Text>{data.title}</Text>
                    <Text>{data.body}</Text>
                </View>
            )}
        </View>
    );
}