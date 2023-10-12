import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { getPokemonById } from '../services/pokeapi';
import { Link } from 'react-router-native';
const PokeList = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const promises = Array.from({ length: 20 }, (_, index) => getPokemonById(index + 1));
            try {
                const pokemonData = await Promise.all(promises);
                setPokemonList(pokemonData);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching Pokémon data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const renderPokemonCard = ({ item }) => (

        <Link to={`/information/${item.id}`}>
        <View style={styles.card}>
            <Image style={styles.pokemonImage} source={{ uri: item.sprites.front_default }} />
            <Text style={styles.pokemonName}>{item.name}</Text>
        </View>
        </Link>

    );

    return (
        <View style={styles.container}>
            {loading && <ActivityIndicator style={styles.loader} size='large' color='#E53939' />}
            <FlatList
                data={pokemonList}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderPokemonCard}
                numColumns={2}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        padding: 10,
    },
    loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    listContainer: {
        flexGrow: 1,
        justifyContent: 'center',
    },
    card: {
        backgroundColor: '#cbf3f0',
        borderRadius: 10,
        padding: 20,
        margin: 10,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3,
        alignItems: 'center',
    },
    pokemonImage: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        marginBottom: 10,
    },
    pokemonName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333333',
        textAlign: 'center',
    },
});

export default PokeList;
