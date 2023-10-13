import React, { useEffect, useState } from 'react';
import { View, Text, Button, ActivityIndicator, Image } from 'react-native';
import { Link, useParams } from 'react-router-native';
import PokemonDetails from '../components/PokemonDetails';
import { getPokemonById } from '../services/pokeapi';

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
        <View>
            <Text>Detalles del Pokémon</Text>
            {pokemon ? (
                <>
                    <Image
                        style={{ height: 250, width: 250 }}
                        source={{
                            uri: pokemon.sprites.front_default,
                        }}
                    />
                    <PokemonDetails pokemon={pokemon} />
                </>
            ) : (
                <ActivityIndicator style={{ width: 'auto', height: 250 }} size='large' color='#E53939' />
            )}
            <Link to='/'>
                <Image
                    style={{ height: 100, width: 100 }}
                    source={require('../../assets/home.png')}
                />
            </Link>
        </View>
    );
}

export default Information;
