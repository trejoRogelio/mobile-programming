import { Button, Text, View, Image, StyleSheet, ImageBackground } from 'react-native';
import { Link, useParams } from 'react-router-native';
import { useEffect, useState } from 'react';

//Components

import Types from '../components/Types';
import Pokedata from '../components/Pokedata';
import HeadInfo from '../components/HeadInfo';

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
        <View style={estilos.container}>
            <ImageBackground source={require('../../assets/pokedex.png')} style={{ flex: 1 }}>
                <View style={{ height: 100 }}>
                <HeadInfo 
                    id={ pokemonid }
                    name={pokemon?.name}
                />
                </View>
                
                <View style={ estilos.typing }>
                <Types
                    type1={pokemon?.types[0]?.type?.name}
                />
                <Types
                    type1={pokemon?.types[1]?.type?.name}
                />
                </View>
                {/*<Text>
                {pokemon?.types[0]?.type?.name}
                {pokemon?.types[1]?.type?.name !== undefined ? "/" + pokemon?.types[1]?.type?.name : ""}
    </Text>*/}
                <View style={ estilos.sprite }>
                <Image
                    style={{ height: 200, width: 210 }}
                    source={
                        {
                            uri: pokemon?.sprites?.front_default
                        }
                    }
                />
                </View>
                <Pokedata 
                    pokemon={pokemon}
                />
                <Link to='/'>
                    <Text style={{ color: 'white', textAlign: 'right', fontWeight: 'bold'}}> Go To Home!!!</Text>
                </Link>
            </ImageBackground>
        </View>
    );
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        resizeMode: 'cover'
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    typing: {
        width: 385,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    sprite: {
        marginLeft: 100,
        marginTop: 10,
        marginBottom: 10
    }
});

export default Information;