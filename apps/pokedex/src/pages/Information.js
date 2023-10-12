import React, { useEffect, useState } from 'react';
import { Text, View, Image, StyleSheet, ActivityIndicator } from 'react-native';
import { Link, useParams } from 'react-router-native';
import { getPokemonById } from '../services/pokeapi';
import PokemonData from '../components/PokemonData';

const Information = () => {
    const [pokemon, setPokemon] = useState(null);

    const { pokemonid } = useParams();

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const pokeInformation = await getPokemonById(pokemonid);
                setPokemon(pokeInformation);
            } catch (error) {
                console.error(error);
            }
        };

        fetchPokemon();
    }, [pokemonid]);

    return (
        <View style={styles.container}>
            {pokemon ? (
                <PokemonData pokemon={pokemon} />
            ) : (
                <ActivityIndicator style={styles.loader} size='large' color='#f3cf2f' />
            )}
    
            <Link to="/">
                <Text style={styles.linkText}>Volver al inicio</Text>
            </Link>
        </View>
    );    
    
    
    
    
    
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5874b3',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loader: {
        width: 'auto',
        height: 250,
    },
    linkText: {
        marginTop: 20,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#74d461',
    },
});

export default Information;
