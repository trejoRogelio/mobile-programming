import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Navbar() {
    return (
        <View style={styles.navbar}>
            <Text style={styles.navbarText}>Pokédex PAU</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    navbar: {
        padding: 10,
        backgroundColor: '#E53939',
        height: 140, // Ajusta la altura a 80 puntos
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 2,
        borderBottomColor: 'white'
    },
    navbarText: {
        color: 'white',
        fontSize: 30,
        fontStyle: 'italic',
        fontWeight: 'bold'
    }
});

export default Navbar;
