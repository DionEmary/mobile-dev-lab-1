import { Button, StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import React from 'react';
import { list } from '../components/fruits';
import { Link } from 'expo-router';

export default function Home() {
    return (
        <View style={styles.container}>
            <Text>Welcome to the App!</Text>
            <FlatList style={styles.list}
                data={list}
                renderItem={({ item }: {item: string}) => (
                    <Text style={styles.items}>{item}</Text>
                )}
            />
            <Link href="/lab_3">
                Lab 3
            </Link>
            <Link href="/lab4">
                Lab 4
            </Link>
            <Link href="/lab5">
                Lab 5
            </Link>
            <Link href="/lab6">
                Lab 6
            </Link>
        </View>
    );


}

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