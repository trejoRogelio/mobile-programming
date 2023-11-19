import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
    return (
        <View style={styles.footer}>
            <Text style={styles.footerText}>© copyright Paulina Glz</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        backgroundColor: 'red', // Cambiado a color rojo
        padding: 10,
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    footerText: {
        color: '#fff',
        fontSize: 14,
    },
});

export default Footer;
