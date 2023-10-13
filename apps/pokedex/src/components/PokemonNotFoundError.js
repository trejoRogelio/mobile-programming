import React from 'react';
import { View, Image, Text } from 'react-native';

const PokemonNotFoundError = () => {
    return (
        <View>
            <Image
                style={{ height: 250, width: 250 }}
                source={require('../Imagenes/Error.jpg')}
            />
            <Text>Por favor ingresa un pokemon valido</Text>
        </View>
    );
}

export default PokemonNotFoundError;
