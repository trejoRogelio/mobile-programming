import React from 'react';
import { Text, View } from 'react-native';
import Aesthetic from './Aesthetic';

function Navbar() {
    return (
        <View style={Aesthetic.navContainer}>
            <Text style={Aesthetic.navText}>PokéDex ISC</Text>
        </View>
    );
}

export default Navbar;
