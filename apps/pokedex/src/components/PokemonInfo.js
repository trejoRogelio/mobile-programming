import React from 'react';
import { Text, View, StyleSheet, Image} from 'react-native';
import { useParams } from 'react-router-native';
import { useEffect, useState } from 'react';

// Servicios 
import { getPokemonById } from '../services/pokeapi';

const PokemonInfo = () => {
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
                    <Image
                        source={{ uri: pokemon.sprites.front_default }}
                        style={styles.image}
                    />
                    <Text style={styles.name}>{pokemon.name}</Text>
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
        marginTop: 15
    },
    image: {
        width: 250,
        height: 250,
        marginBottom: 20,
    },
    name: {
        fontSize: 30,
        fontWeight: 'bold',
        fontStyle: 'italic',
        color: '#ffffff',
        marginBottom: 10
    }
});

export default PokemonInfo;