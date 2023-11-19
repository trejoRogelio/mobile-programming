import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

function Navbar() {
    return (
        <View style={styles.navbar}>
            <Text style={styles.navbarText}>PokéDex ISC</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    navbar: {
        marginTop: Constants.statusBarHeight,
        padding: 30,
        backgroundColor: '#cc0000',
        borderWidth: 3, 
        borderColor: '#000000', 
    },
    navbarText: {
        color: '#ffde00',
        shadowColor: '#000000',
        shadowOpacity: 10, 
        fontSize: 30,
        fontStyle: 'italic',
        fontWeight: 'bold',
        textAlign: 'center'
    }
});

export default Navbar;