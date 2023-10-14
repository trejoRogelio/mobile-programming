import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './PokeStyles';

function PokeError({ error }) {
    if (!error) {
        return null;
    }

    return (
        <View style={styles.errorContainer}>
            <Image
                source={require('../images/pokerror.png')}
                style={styles.errorImage}
            />
            <Text style={styles.centeredText}>¡No se encontró el Pokémon!</Text>
        </View>
    );
}

export default PokeError;
