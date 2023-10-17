import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import { getPokemonByName } from '../services/API';
import PokemonImage from '../components/PokemonImage';
import ErrorMessage from '../components/ErrorMessage';

function Home() {
    const [pokemonName, setPokemonName] = useState('');
    const [pokemon, setPokemon] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);

    const handlePress = async () => {
        setIsLoading(true);
        setHasError(false);
        try {
            const pokeInformation = await getPokemonByName(pokemonName);
            setPokemon(pokeInformation);
        } catch (error) {
            setHasError(true);
        } finally {
            setIsLoading(false);
        }
    }

    const toLowerCase = (name) => name.toLowerCase();

    const handleChangeText = (name) => setPokemonName(toLowerCase(name));

    return (
        <View style={styles.container}>
            {hasError ? (
                <ErrorMessage />
            ) : (
                <PokemonImage isLoading={isLoading} pokemon={pokemon} />
            )}

            <View style={styles.inputs}>
                <TextInput
                    onChangeText={handleChangeText}
                    placeholder='Search a Pokémon'
                />
                <Button
                    onPress={handlePress}
                    title='Search'
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputs: {
        width: '450',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
});

export default Home;
