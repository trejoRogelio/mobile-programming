import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, Image, TextInput, ActivityIndicator } from 'react-native';
import { Link } from 'react-router-native';

// Services
import { getPokemonByName } from '../services/pokeapi';

function Home() {
    const [pokemonName, setPokemonName] = useState('');
    const [pokemon, setPokemon] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [searched, setSearched] = useState(false);

    const handleChangeText = (namePokemon) => {
        setPokemonName(namePokemon);
        setError(false);
        if (!namePokemon) {
            setPokemon(null); 
        }
    };

    const handlePress = async () => {
        setLoading(true);
        try {
            const pokeInformation = await getPokemonByName(pokemonName);
            setPokemon(pokeInformation);
            setSearched(true);
        } catch (error) {
            setPokemon(null);
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.main}>
                {error && (
                    <Text style={styles.errorText}>
                        No se encontró un Pokémon con ese nombre.
                    </Text>
                )}
                {(!searched || !pokemonName) && (
                    <Image
                        style={styles.pokeballImage}
                        source={require('../../assets/pokebola.png')}
                    />
                )}
                {loading && <ActivityIndicator style={styles.activityIndicator} size='large' color='#E53939' />}
                {!loading && pokemon && searched && (
                    <Link to={`/information/${pokemon.id}`}>
                        <Image
                            style={styles.pokemonImage}
                            source={{
                                uri: pokemon?.sprites?.front_default
                            }}
                        />
                    </Link>
                )}
                <View style={styles.inputs}>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={handleChangeText}
                        placeholder='Search a Pokemon'
                        value={pokemonName}
                    />
                    <Button
                        onPress={handlePress}
                        title='Search'
                    />
                </View>
                <View style={styles.filters}>
                    <Text style={styles.filtersText}>INGRESA UN POKEMON</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    main: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
    },
    pokeballImage: {
        height: 250,
    },
    activityIndicator: {
        width: 'auto',
        height: 250,
    },
    pokemonImage: {
        height: 250,
        width: 250,
    },
    inputs: {
        width: 400,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    textInput: {
        width: 250,
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        borderRadius: 5,
    },
    filters: {
        marginTop: 20,
    },
    filtersText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default Home;

