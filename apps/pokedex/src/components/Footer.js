import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Footer() {
    return (
        <View style={styles.footer}>
            <Text style={styles.text}>Juanchorc - UP200760</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        backgroundColor: '#333',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: 12,
    },
});

export default Footer;
