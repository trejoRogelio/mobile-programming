import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
    return (
        <View style={styles.footer}>
            <Text style={styles.footerText}>Pokedex de chavezz</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        backgroundColor: '#333',
        alignItems: 'center',
        padding: 10,
    },
    footerText: {
        color: 'white',
    },
});

export default Footer;
