import React from 'react';
import { View, Image, ActivityIndicator } from 'react-native';
import { Link } from 'react-router-native';

function PokemonImage({ isLoading, pokemon }) {
    if (isLoading) {
        return (
            <ActivityIndicator style={{ width: 300, height: 300 }} size='large' color='#E53939' />
        );
    } else if (pokemon) {
        return (
            <Link to={`/information/${pokemon.id}`}>
                <Image
                    style={{ height: 300, width: 300 }}
                    source={{ uri: pokemon?.sprites?.other?.home?.front_default }}
                />
            </Link>
        );
    } else {
        return (
            <Image style={{ height: 300, width: 300 }} source={require('../../assets/pokeball.png')} />
        );
    }
}

export default PokemonImage;
