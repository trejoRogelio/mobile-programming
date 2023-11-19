import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import { pokemonListStyles } from '../components/styles';

const PokemonList = ({ pokemonList }) => {
    return (
        <FlatList
            data={pokemonList}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
                <Link to={`/information/${item.id}`} style={styles.link}>
                    <View style={styles.pokemonCard}>
                        <Image
                            style={styles.pokemonImage}
                            source={{ uri: item.sprites.front_default }}
                        />
                        <Text>{item.name}</Text>
                    </View>
                </Link>
            )}
        />
    );
}

const styles = pokemonListStyles;

export default PokemonList;
