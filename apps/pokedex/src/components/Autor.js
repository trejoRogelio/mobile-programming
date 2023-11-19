import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Autor = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>© 2023 Vivian Andrea programadora</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 55,
        backgroundColor: 'black', 
        padding: 10,
        alignItems: 'center',
    },
    text: {
        color: 'white', 
        fontSize: 12, 
    },
});

export default Autor;
