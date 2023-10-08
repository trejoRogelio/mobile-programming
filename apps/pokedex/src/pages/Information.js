import { Button, Text, View, } from 'react-native';
import { Link, useParams } from 'react-router-native';
import { useEffect, useState } from 'react';

// Services 
import { getPokemonById } from '../services/pokeapi';

function Information() {
    const [pokemon, setPokemon] = useState();

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

    }, []);

    return (
        <View>
            <Text>Information Page</Text>
            <Text>{pokemonid}</Text>

            <Link to='/'>
                <Text> Go To Home!!!</Text>
            </Link>
        </View>
    );
}

export default Information;