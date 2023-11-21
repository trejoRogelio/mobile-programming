import React, { useState } from 'react';
import { View, Image, ActivityIndicator, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import { getPokemonByName } from '../services/pokeapi';
import PokemonList from '../components/PokemonList';
import SearchBar from '../components/SearchBar';

function Home() {
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [pokemonName, setPokemonName] = useState('');

    const handleSearch = async (name) => {
        setLoading(true);
        setError(false);
        setPokemonName(name);

        if (!name) {
            setLoading(false);
            setError(false);
            setPokemon(null);
            return;
        }

        try {
            const pokeInformation = await getPokemonByName(name);
            setPokemon(pokeInformation);
        } catch (error) {
            setError(true);
            setPokemon(null);
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            {loading && <ActivityIndicator style={styles.loader} size='large' color='#E53939' />}
            {!loading && !error && !pokemon && (
                <Image style={styles.pokeballImage} source={require('../../assets/pokebola.png')} />
            )}
            {error && !loading && !pokemon && (
                <Image style={styles.pokeballImage} source={require('../../assets/pokebolarota.png')} />
            )}
            {!loading && pokemon && (
                <Link to={`/information/${pokemon.id}`}>
                    <Image style={styles.pokemonImage} source={{ uri: pokemon?.sprites?.front_default }} />
                </Link>
            )}
            <SearchBar onSearch={handleSearch} />
            <PokemonList />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
    },
    loader: {
        width: 'auto',
        height: 250,
    },
    pokeballImage: {
        height: 250,
        width: 250,
    },
    pokemonImage: {
        height: 250,
        width: 250,
    },
});

export default Home;
