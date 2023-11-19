import React from 'react';
import { Button, StyleSheet, Text, View, Image, TextInput, ActivityIndicator } from 'react-native';
import { Link } from 'react-router-native';

// Services
import { getPokemonByName } from '../services/pokeapi';
import { useState } from 'react';

function Home() {
    const [pokemonName, setPokemonName] = useState('');
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handdleChangeText = (namePokemon) => setPokemonName(namePokemon);

    const handdlePress = async () => {
        setLoading(true);
        try {
            const pokeInformation = await getPokemonByName(pokemonName);
            setPokemon(pokeInformation);
            setError(''); // Limpiar cualquier error previo
        } catch (error) {
            setPokemon(null); // Restablecer a null si ocurre un error
            setError('Pokemon no encontrado'); // Mensaje de error
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.main}>
                {loading && <ActivityIndicator size='large' color='#E53939' />}
                {!loading && pokemon && (
                    <Link to={`/information/${pokemon.id}`}>
                        <Image
                            style={styles.image}
                            source={{
                                uri: pokemon?.sprites?.front_default
                            }}
                        />
                    </Link>
                )}

                {error && (
                    <View style={styles.errorContainer}>
                        <Text style={styles.errorText}>{error}</Text>
                    </View>
                )}
                <View style={styles.inputs}>
                    <TextInput
                        onChangeText={handdleChangeText}
                        placeholder='Search a Pokemon'
                        style={styles.input}
                    />
                    <Button
                        onPress={handdlePress}
                        title='Search'
                    />
                </View>
                <View style={styles.filters}>
                    <Text style={styles.filtersText}>Filters</Text>
                </View>
                {/* Muestra los atributos aquí */}
                {pokemon && (
                    <View style={styles.pokemonInfo}>
                        <Text style={styles.infoText}>Nombre: {pokemon.name}</Text>
                        <Text style={styles.infoText}>Altura: {pokemon.height}</Text>
                        <Text style={styles.infoText}>Peso: {pokemon.weight}</Text>
                        <Text style={styles.infoText}>Tipos: {pokemon.types.map((type) => type.type.name).join(', ')}</Text>
                        <Text style={styles.infoText}>Especie: {pokemon.species.name}</Text>
                    </View>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    main: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    inputs: {
        width: 400,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        width: '70%',
        padding: 10,
    },
    image: {
        height: 250,
        width: 250,
    },
    errorContainer: {
        backgroundColor: '#FFCDD2',
        padding: 10,
        width: '100%',
        marginBottom: 10,
    },
    errorText: {
        color: '#D32F2F',
        fontSize: 18,
        textAlign: 'center',
    },
    filters: {
        backgroundColor: '#E53939',
        padding: 10,
        width: '100%',
        marginBottom: 10,
    },
    filtersText: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
    },
    pokemonInfo: {
        alignItems: 'center',
        marginTop: 10,
    },
    infoText: {
        fontSize: 16,
    },
});

export default Home;
