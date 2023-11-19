import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Link, useParams } from 'react-router-native';
import { getPokemonById, getPokemonByLocationId } from '../services/pokeapi';


function Information() {
    const [pokemon, setPokemon] = useState(null);
    // const [pokemonLo, setPokemonLo] =useState(null);
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

    // useEffect(() => {
    //     const fetchPokemonInfo = async () => {
    //         try {
                
    //             const pokeLocation = await getPokemonByLocationId(pokemonid);
    //             setPokemonLo(pokeLocation);
    //         } catch (error) {
    //             console.error(error);
    //         } finally {
    //             console.log('end!!!');
    //         }
    //     };

    //     fetchPokemonInfo();
    // }, [pokemonid]);

    return (
        <View style={styles.container}>
            {/* <View style={styles.textContainer}> */}
            <Text style={styles.label}>Name:</Text>
            <Text>{(pokemon?.name || 'no aparece en la pokedex').toUpperCase()}</Text>

            <Text style={styles.label}>ID:</Text>
            <Text>{pokemonid}</Text>

            <Text style={styles.label}>Name Item:</Text>
            <Text>{(pokemon?.held_items[0]?.item?.name || 'no tiene item').toUpperCase()}</Text>

            <Text style={styles.label}>Weight:</Text>
            <Text>{pokemon?.weight || 'sin coincidencias'}</Text>

            <Text style={styles.label}>Abilities:</Text>
            <Text>{(pokemon?.abilities[0]?.ability?.name || 'no se encontro alguna habilidad').toUpperCase()}</Text>

            <Text style={styles.label}>Types:</Text>
            <Text>{(pokemon?.types[0]?.type?.name || 'no exixte tipo').toUpperCase()}</Text>

                

            <Text style={styles.label}>Moves:</Text>
            <Text>{(pokemon?.moves[0]?.move?.name || 'sin movimientos').toUpperCase()}</Text>

            <Text style={styles.label}>game_indices:</Text>
            <Text>{(pokemon?.game_indices[0]?.version?.name || 'sin indices').toUpperCase()}</Text>

            {/* <Text style={styles.label}>Locaton:</Text>
                <Text>{pokemonLo?.location_area_encounters?.location_area.name || 'N/A'}</Text> */}

            <Text style={styles.label}>Stats:</Text>
            <Text>{(pokemon?.stats[0]?.stat?.name || '0 stats').toUpperCase()}</Text>

            {/* </View> */}
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
        justifyContent: 'space-evenly',
        // backgroundColor: '#F5F5F5',
        padding: 20,
    },
    // textContainer: {
    //     alignItems: 'flex-start', 
    // },
    
    text: {
        fontSize: 38,
        marginBottom: 15,
        color: 'black',

    },
    link: {
        alignItems: 'center', 
        justifyContent: 'center', 
        color: '#007BFF',
        fontSize: 20,
        marginTop: 20,
        borderColor: 'black',
        borderWidth: 2,
        padding: 12,
        borderRadius: 25,
    },
    label: {
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: 'darkblue',
        width: 150,
    },
});

export default Information;
