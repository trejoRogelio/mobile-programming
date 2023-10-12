import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Link, useParams } from 'react-router-native';
import { getPokemonById } from '../services/pokeapi';


function Information() {
    const [pokemon, setPokemon] = useState(null);
    const { pokemonid } = useParams();

    useEffect(() => {
        const fetchPokemonInfo = async () => {
            try {
                const pokeInformation = await getPokemonById(pokemonid);
                setPokemon(pokeInformation);
            } catch (error) {
                console.error(error);
            } finally {
                console.log('end!!!');
            }
        };

        fetchPokemonInfo();

    }, [pokemonid]);

    return (
        <View style={styles.container}>

            <Text>
                Name: {pokemon?.name}
            </Text>
            <Text>
                ID: {pokemonid}
            </Text>
            <Text>
                Name Item: {pokemon?.held_items[0]?.item?.name}
            </Text>
            <Text>
                Weight: {pokemon?.weight}
            </Text>
            <Text>
                Abilities: {pokemon?.abilities[0]?.ability?.name}
            </Text>
            <Text>
                Types: {pokemon?.types[0]?.type?.name}
            </Text>
            <Text>
                Types_name: {pokemon?.types[0]?.type?.name}
            </Text>
            <Text>
                Version: {pokemon?.game_indices[0]?.version?.name}
            </Text>
            <Text>
                Order: {pokemon?.order}
            </Text>




            <Link to='/'>
                <Text style={styles.link}> Regresar </Text>
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5F5F5',
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
    },
    text: {
        fontSize: 30,
        marginBottom: 5,
        color: '#555',

    },
    link: {
        color: '#007BFF',
        fontSize: 20,
        marginTop: 20,
    },
    label: {
        fontWeight: 'bold',
        color: '#000',
    },
});

export default Information;
