import { Button, Text, View, StyleSheet, Image } from 'react-native';
import { Link, useParams } from 'react-router-native';
import { useEffect, useState } from 'react';
import HButton from '../components/HButton'


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
        <View style={styles.main}>
            <View style={styles.content}>
                <View>
                    {   pokemon && (
                        <View>
                            <Text>Pokemon ID {pokemonid}</Text>
                            <View>
                                <Text>Base experience: {`${pokemon.base_experience}`}</Text>
                                <Text>Height {`${pokemon.height}`}</Text>
                                <Text>Weight {`${pokemon.weight}`}</Text>
                                <View style={styles.types}>
                                    <Text>Types</Text>
                                    {pokemon.types.map((typeData, index) => (
                                        <Link to={`/type/${typeData.type.name}`}>
                                            <Text key={typeData.type.name} style={styles.type}>{`${typeData.type.name}`}</Text>
                                        </Link>
                                    ))}
                                </View>
                                <View style={styles.types}>
                                    <Text>Abilities</Text>
                                    {pokemon.abilities.map((abilityData, index) => (
                                        <Link to={`/ability/${abilityData.ability.name}`}>
                                            <Text key={abilityData.ability.name} style={styles.type}>{`${abilityData.ability.name}`}</Text>
                                        </Link>
                                    ))}
                                </View>
                                <View>
                                    <Text>Stats</Text>
                                    {pokemon.stats.map((statData, index) => (
                                        <Text key={index}>{`${statData.stat.name}: ${statData.base_stat}`}</Text>
                                    ))}
                                </View>
                            </View>
                        </View>
                    )}
                </View>
                <View style={styles.center}>
                    <Text>Front image</Text>
                    <Image
                        style={styles.image}
                        source={
                            {
                                uri: pokemon?.sprites?.front_default
                            }
                        }
                        resizeMode='contain'
                    />
                    <Text>Back image</Text>
                    <Image
                        style={styles.image}
                        source={
                            {
                                uri: pokemon?.sprites?.back_default
                            }
                        }
                        resizeMode='contain'
                    />
                </View>
            </View>

            <HButton />
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flexDirection: 'column',
        alignItems: 'left',
    },
    content: {
        padding: 10,
        flexDirection: 'row',
        alignItems: '',
        justifyContent: 'space-between'
    },
    image: {
        height: 200,
        width: 200,
        marginVertical: -10,
    },
    center:{
        alignItems: 'center'
    },
    types:{
        borderWidth: 2
    },
    type: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        padding: 10
    }
});

export default Information;