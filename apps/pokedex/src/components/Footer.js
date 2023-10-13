import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Footer() {
    return (
        <View style={styles.footer}>
            <Text style={styles.footerText}>PokéDex ISC - Aguayo</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        backgroundColor: '#E53939',
        padding: 10,
        alignItems: 'center',
    },
    footerText: {
        color: 'white',
        fontSize: 14,
        fontStyle: 'italic',
        fontWeight: 'bold',
    },
});

export default Footer;
