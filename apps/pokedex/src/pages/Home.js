import React, { useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View, Image, TextInput, Alert } from 'react-native';

import { Link } from 'react-router-native';
import { getPokemonByName } from '../services/pokeapi';
import InputComponent from '../components/InputComponent';

const Home = () => {
    const [pokemonName, setPokemonName] = useState('');
    const [pokemon, setPokemon] = useState();
    const [loading, setLoading] = useState(false);

    const handleInputChange = (namePokemon) => setPokemonName(namePokemon);

    const handleSearch = async () => {
        if (!pokemonName.trim()) {
            Alert.alert('Error', 'Por favor ingresa un nombre de Pokémon.');
            return;
        }
        setLoading(true);
        try {
            const pokeInformation = await getPokemonByName(pokemonName);
            await new Promise(resolve => setTimeout(resolve, 1000));
            setPokemon(pokeInformation);
        } catch (error) {
            if (error.response && error.response.status === 404) {
                Alert.alert('Error', 'Pokémon no encontrado.');
            } else {
                Alert.alert('Error', 'Ocurrió un problema al buscar el Pokémon.');
            }
            setPokemon(null);
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.main}>
                {loading && <ActivityIndicator style={styles.loader} size='large' color='#E53939' />}
                {!loading && pokemon && (
                    <Link to={`/information/${pokemon.id}`}>
                        <Image
                            style={styles.pokemonImage}
                            source={{
                                uri: pokemon?.sprites?.front_default
                            }}
                        />
                    </Link>
                )}
                <InputComponent
                    value={pokemonName}
                    onChangeText={handleInputChange}
                    onPress={handleSearch}
                />
                <View style={styles.filters}>
                    <Link to='/list'>
                        <Text style={styles.linkText}>Go PokeList</Text>
                    </Link>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    linkText: {
        color: '#fff',
        padding: 10,
        backgroundColor: '#000',
        marginTop: 20,
        borderRadius: 10
    },
    title: {
        fontSize: 24,
        color: '#fff',
        fontWeight: 'bold',
    },
    main: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loader: {
        width: 'auto',
        height: 250,
    },
    pokemonImage: {
        height: 250,
        width: 250,
        marginBottom: 20,
    },
    filters: {
        marginBottom: 50,
    },
});

export default Home;
