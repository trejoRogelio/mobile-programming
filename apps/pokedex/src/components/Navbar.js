import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

function Navbar() {
    return (
        <View style={styles.navbar}>
            <Text style={styles.navbarText}>PokéDex Chavex</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    navbar: {
        marginTop: Constants.statusBarHeight,
        padding: 20,
        backgroundColor: 'purple'
    },
    navbarText: {
        color: 'white',
        fontSize: 35,
        fontStyle: 'italic',
        fontWeight: 'bold',
        
    }
});

export default Navbar;