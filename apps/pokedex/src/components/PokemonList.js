import React, { useState, useEffect } from 'react';
import { ScrollView, Text, Image, View, StyleSheet, ActivityIndicator } from 'react-native';
import {Link} from 'react-router-native';
import { getPokemonList, getPokemonByName } from '../services/pokeapi';

function PokemonList() {
    const [pokemonList, setPokemonList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getPokemonList(20)
            .then(async (data) => {
                const promises = data.results.map(async (pokemon) => {
                    const details = await getPokemonByName(pokemon.name);
                    return {
                        id: details.id,
                        name: details.name,
                        image: details.sprites.front_default,
                    };
                });

                const updatedPokemonList = await Promise.all(promises);
                setPokemonList(updatedPokemonList);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Lo sentimos, hubo un error', error);
                setLoading(false);
            });
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Primeros 20 pokemon</Text>
            {loading ? (
                <ActivityIndicator style={styles.loader} size='large' color='#f3cf2f' />
            ) : (
                <ScrollView contentContainerStyle={styles.scrollView}>
                    {pokemonList.map((pokemon, index) => (
                        <View key={index} style={styles.pokemonItem}>
                            <Link to={`/information/${pokemon.id}`}>
                                <Image style={styles.pokemonImage} source={{ uri: pokemon.image }} />
                            </Link>
                            <Text>{pokemon.name}</Text>
                        </View>
                    ))}
                </ScrollView>
            )}
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    scrollView: {
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    pokemonItem: {
        width: 150,
        alignItems: 'center',
        marginBottom: 10,
    },
    loader: {
        width: 'auto',
        height: 250,
    },
    pokemonImage: {
        width: 100,
        height: 100,
        marginBottom: 5,
    },
});

export default PokemonList;