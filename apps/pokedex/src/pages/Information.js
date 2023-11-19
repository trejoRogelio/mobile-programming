import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Link, useParams } from 'react-router-native';
import { getPokemonById } from '../services/pokeapi';
import PokemonAttributes from '../components/PokemonAttributes';
import { informationStyles } from '../components/styles';

function Information() {
    const [pokemon, setPokemon] = useState(null);
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
    }, [pokemonid]);

    if (!pokemon) {
        return <View><Text>Loading...</Text></View>;
    }

    return (
        <ScrollView>
            <PokemonAttributes attributes={pokemon} />
            <Link to='/' style={informationStyles.link}>
                <Text style={informationStyles.linkText}> Go To Home!!!</Text>
            </Link>
        </ScrollView>
    );
}

export default Information;