
import React, { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';
import { Link, useParams } from 'react-router-native';
import { getPokemonById } from '../services/pokeapi';
import  Atributos from 'react';

function Information() {
    const [pokemon, setPokemon] = useState(null);
    const { pokemonid } = useParams();

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const pokeInformation = await getPokemonById(pokemonid);
                setPokemon(pokeInformation);
            } catch (error) {
                console.error('Error fetching Pokemon:', error);
            }
        };

        fetchPokemon();
    }, [pokemonid]);

    const renderPokemonInfo = () => {
        if (!pokemon) {
            return null;
        }

    
    };

    return (
        <View>
            <Text>Information Page</Text>
            {pokemon && renderPokemonInfo()}
            <Atributos pokemon={pokemon}></Atributos>

            <Link to='/'>
                <Text> Go To Home!!!</Text>
            </Link>
        </View>
    );
}

export default Information;
