import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useParams } from 'react-router-native';
import { useEffect, useState } from 'react';

// Servicios 
import { getPokemonById } from '../services/pokeapi';

const Skills = () => {
    const [pokemon, setPokemon] = useState(null);
    const { pokemonid } = useParams();

    useEffect(() => {
        // Manera de Hacelo con promesas
        // getPokemonById(pokemonid)
        //     .then((pokeInofrmation) => {
        //         console.log(pokeInofrmation);
        //     })
        //     .catch((error) => {
        //     })
        //     .finally(() => {

        //     });

        // Async/Await -> Funcion 
        // const fn = async () => {
        //     const pokeInformation = await getPokemonById(pokemonid);

        //     console.log(pokeInformation);
        // };
        // fn();

        // Async/Await -> IEFI
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
    }, [pokemonid]);

    return (
        <View style={styles.container}>
            {pokemon ? (
                <>
                    <Text style={styles.info}>Type:</Text>
                    {pokemon.types.map((type, index) => (
                        <Text key={index} style={styles.statistics}>
                            {type.type.name}
                        </Text>
                    ))}
                    <Text style={styles.info}>Statistics:</Text>
                    {pokemon.stats.map((stat, index) => (
                        <Text key={index} style={styles.statistics}>
                            {stat.stat.name}: {stat.base_stat}
                        </Text>
                    ))}
                    <Text style={styles.info}>Height:</Text>
                    <Text style={styles.statistics}>{pokemon.height / 10} m</Text>
                    <Text style={styles.info}>Weight:</Text>
                    <Text style={styles.statistics}>{pokemon.weight / 10} kg</Text>
                </>
            ) : (
                <Text>Loading...</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#007ACC',
        alignItems: 'center',
        justifyContent: 'center',
    },
    info: {
        fontSize: 19,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#ffffff',
    },
    statistics: {
        fontSize: 17,
        marginBottom: 5,
        color: '#000000',
        fontWeight: 'bold',
    }
});

export default Skills;