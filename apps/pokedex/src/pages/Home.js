import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button, ActivityIndicator, StyleSheet, ScrollView } from 'react-native';
import { Link } from 'react-router-native';

// Services
import { getPokemonByName } from '../services/pokeapi';

const Home = () => {
    const [pokemonName, setPokemonName] = useState('');
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChangeText = (namePokemon) => {
        setPokemonName(namePokemon);
        setError(null);
    };

    const handlePress = async () => {
        setLoading(true);
        try {
            const pokeInformation = await getPokemonByName(pokemonName);
            setPokemon(pokeInformation);
            setError(null);
        } catch (error) {
            setError('Pokemon not found');
            setPokemon(null);
        } finally {
            setLoading(false);
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.main}>
                {loading && <ActivityIndicator style={styles.loading} size='large' color='#E53939' />}
                {pokemon && (
                    <View style={styles.pokemonInfo}>
                        <Image
                            style={styles.pokemonImage}
                            source={{
                                uri: pokemon?.sprites?.front_default
                            }}
                        />
                        <Text style={styles.pokemonName}>Name: {pokemon.name}</Text>
                        <Text style={styles.pokemonAttribute}>Height: {pokemon.height}</Text>
                        <Text style={styles.pokemonAttribute}>Weight: {pokemon.weight}</Text>
                        <Text style={styles.pokemonAttribute}>Base Experience: {pokemon.base_experience}</Text>
                        <Text style={styles.pokemonAttribute}>Abilities:</Text>
                        <ul style={styles.pokemonAttributeList}>
                            {pokemon.abilities.map((ability, index) => (
                                <li key={index} style={styles.pokemonAttribute}>{ability.ability.name}</li>
                            ))}
                        </ul>
                        <Text style={styles.pokemonAttribute}>Types:</Text>
                        <ul style={styles.pokemonAttributeList}>
                            {pokemon.types.map((type, index) => (
                                <li key={index} style={styles.pokemonAttribute}>{type.type.name}</li>
                            ))}
                        </ul>
                        <Text style={styles.pokemonAttribute}>Stats:</Text>
                        <ul style={styles.pokemonAttributeList}>
                            {pokemon.stats.map((stat, index) => (
                                <li key={index} style={styles.pokemonAttribute}>
                                    {stat.stat.name}: {stat.base_stat}
                                </li>
                            ))}
                        </ul>
                    </View>
                )}
                {(error || !pokemon) && (
                    <View>
                        <Image
                            style={styles.errorImage}
                            source={require('../../assets/pokebola.png')}
                        />
                        {error && <Text style={styles.errorText}>{error}</Text>}
                    </View>
                )}
                <View style={styles.inputs}>
                    <TextInput
                        onChangeText={handleChangeText}
                        placeholder='Search a Pokemon!'
                        style={styles.inputField}
                    />
                    <Button
                        onPress={handlePress}
                        title='Search'
                    />
                </View>
                <View>
                    <Text style={styles.filters}>Filters!!!</Text>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
    },
    main: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        padding: 16,
    },
    loading: {
        width: 'auto',
        height: 250,
    },
    pokemonInfo: {
        alignItems: 'center',
    },
    pokemonImage: {
        height: 250,
        width: 250,
    },
    pokemonName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    pokemonAttribute: {
        fontSize: 16,
        marginBottom: 5,
    },
    pokemonAttributeList: {
        marginLeft: 20,
    },
    errorImage: {
        height: 170,
        width: 200,
    },
    errorText: {
        fontSize: 16,
        color: 'red',
        marginTop: 10,
    },
    inputs: {
        width: 400,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    inputField: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingLeft: 10,
        flex: 1,
        marginRight: 10,
    },
    filters: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
    },
});

export default Home;
