import { Button, Text, View, StyleSheet, Image } from 'react-native';
import { Link, useParams } from 'react-router-native';
import { useEffect, useState } from 'react';
import { getPokemonById } from '../services/API';
import ProgressBar from 'react-native-progress/Bar';
import PokemonImage from '../components/PokemonImage';
import PokemonInfo from '../components/PokemonInfo';

function Information() {
    const [pokemon, setPokemon] = useState();

    const { pokemonid } = useParams();

    useEffect(() => {
        const fn = async () => {
            const pokeInformation = await getPokemonById(pokemonid);
            if (pokeInformation) {
                setPokemon(pokeInformation);
            }
        };
        fn();

    }, []);

    if (!pokemon) {
        return <Text>Loading...</Text>;
    }

    console.log(pokemon.types)

    return (
        <View style={styles.container}>
             <Text style={styles.title}>Information Page</Text>
            <PokemonImage pokemon={pokemon}/>
            <PokemonInfo pokemon={pokemon}/>
            <Link to='/'>
                <Text>Go to home</Text>
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor:'#262626',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default Information;
