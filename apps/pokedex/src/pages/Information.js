import React from 'react';
import { Text, View, StyleSheet, ScrollView, FlatList } from 'react-native';
import { useParams } from 'react-router-native';
import { useEffect, useState } from 'react';
import { getPokemonById } from '../services/pokeapi';
import PokemonData from '../components/PokemonData';
import RegresoHome from '../components/RegresoHome';

function Information() {
    const [pokemon, setPokemon] = useState();
    const { pokemonid } = useParams();

    useEffect(() => {
        (async () => {
            try {
                const pokeInformation = await getPokemonById(pokemonid);
                setPokemon(pokeInformation);
            } catch (error) {
                console.error(error);
            }
        })();
    }, []);

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.texto}>Information Page</Text>
                <PokemonData pokemon={pokemon} />
                <RegresoHome />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    texto: {
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
    },
})

export default Information;
