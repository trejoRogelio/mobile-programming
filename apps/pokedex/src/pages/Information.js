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
            <Text style={styles.label}>Name:</Text>
            <Text>{pokemon?.name || 'N/A'}</Text>

            <Text style={styles.label}>ID:</Text>
            <Text>{pokemonid}</Text>

            <Text style={styles.label}>Name Item:</Text>
            <Text>{pokemon?.held_items[0]?.item?.name || 'N/A'}</Text>

            <Text style={styles.label}>Weight:</Text>
            <Text>{pokemon?.weight || 'N/A'}</Text>

            <Text style={styles.label}>Abilities:</Text>
            <Text>{pokemon?.abilities[0]?.ability?.name || 'N/A'}</Text>


            <Text style={styles.label}>location:</Text>
            <Text>{pokemon?.locations[0]?.region?.name || 'N/A'}</Text>

            <Text style={styles.label}>Types:</Text>
            <Text>{pokemon?.types[0]?.type?.name || 'N/A'}</Text>

            <Text style={styles.label}>Types_name:</Text>
            <Text>{pokemon?.types[0]?.type?.name || 'N/A'}</Text>

            <Text style={styles.label}>Version:</Text>
            <Text>{pokemon?.game_indices[0]?.version?.name || 'N/A'}</Text>

            <Text style={styles.label}>Order:</Text>
            <Text>{pokemon?.order || 'N/A'}</Text>

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
