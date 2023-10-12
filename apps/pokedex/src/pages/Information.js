import { Button, Text, View } from 'react-native';
import { Link, useParams } from 'react-router-native';
import { useEffect, useState } from 'react';

// Services 
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
            } finally {
                console.log('end!!!');
            }
        })();

    }, []);

    return (
        <View>
            <Text>Information Page</Text>
            <Text>Pokemon ID: {pokemonid}</Text>

            {pokemon && (
                <View>
                    <Text>Name: {pokemon.name}</Text>
                    <Text>Height: {pokemon.height}</Text>
                    <Text>Weight: {pokemon.weight}</Text>
                    <Text>Types: {pokemon.types.map(type => type.type.name).join(', ')}</Text>
                    {/* Add more attributes as needed */}
                </View>
            )}

            <Link to='/'>
                <Text>Go To Home!!!</Text>
            </Link>
        </View>
    );
}

export default Information;
