import React, { useState, useEffect } from 'react';
import { View, Text, Button, ScrollView, Image, ActivityIndicator, StyleSheet, TextInput, Alert } from 'react-native';
import { Link } from 'react-router-native';
import { getAllPokemon, getPokemonByName } from '../services/pokeapi';
import PokemonListItem from '../components/PokemonListItem'; 

function Home() {
    const [pokemonName, setPokemonName] = useState('');
    const [pokemon, setPokemon] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [pokemonList, setPokemonList] = useState([]);

    const handdleChangeText = (namePokemon) => setPokemonName(namePokemon.toLowerCase()); 

    const handdlePress = async () => {
        setLoading(true);
        try {
            const pokeInformation = await getPokemonByName(pokemonName);
            setPokemon(pokeInformation);
        } catch (error) {
            setError(!!error);
            Alert.alert('Pokémon no encontrado D:', `No se encontró ningún Pokémon con el nombre "${pokemonName}"`);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        (async () => {
            try {
                const list = await getAllPokemon();
                setPokemonList(list);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    return (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View style={styles.main}>
                {
                    loading && <ActivityIndicator style={styles.loader} size='large' color='#E53939' />
                }
                {
                    !loading && pokemon && (
                        <Link to={`/information/${pokemon.id}`}>
                            <Image
                                style={styles.pokemonImage}
                                source={{ uri: pokemon?.sprites?.front_default }}
                            />
                        </Link>
                    )
                }
                {
                    (error || !pokemon && !loading) && <Image
                        style={styles.pokebolaImage}
                        source={require('../../assets/pokebola.png')}
                    />
                }
                <View style={styles.inputs}>
                    <TextInput
                        onChangeText={handdleChangeText}
                        style={styles.input}
                        placeholder='Search a Pokémon!'
                    />
                    <Button
                        onPress={handdlePress}
                        title='Search'
                    />
                </View>
                <Text style={styles.filters}>Pokémon</Text>
                <View style={styles.pokemonList}>
                    {pokemonList.map(item => (
                        <PokemonListItem key={item.name} item={item} />
                    ))}
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollViewContent: {
        flexGrow: 1,
    },
    main: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    loader: {
        width: 'auto',
        height: 250,
    },
    pokebolaImage: {
        height: 250,
    },
    inputs: {
        width: 400,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    input: {
        width: 200,
        borderBottomWidth: 1,
        marginBottom: 10,
    },
    filters: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
    },
    pokemonImage: {
        height: 250,
        width: 250,
    },
    pokemonList: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    listItem: {
        margin: 10,
    },
    listImage: {
        width: 100,
        height: 100,
    },
});

export default Home;
