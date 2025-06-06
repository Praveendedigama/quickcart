import React, { useState } from 'react';
import { StyleSheet, Text } from 'react-native';


export default function HomeScreen() {
    const [isLoading,setIsLoading] = useState(true);
    return (
        <Text style={styles.homeText}>
            This is a Home Page
        </Text>
       
    )
}

const styles = StyleSheet.create({
    homeText: {
        fontSize: 30,
        color: 'red',
        textAlign: 'center',
        marginTop: 50,
    }
});