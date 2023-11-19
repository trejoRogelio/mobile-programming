import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import PokemonList from '../components/PokemonList';
import { getPokemonByName } from '../services/pokeapi';
import { pokemonList } from '../components/styles';

function PokemonListView() {
    const [pokemonList, setPokemonList] = useState([]);

    useEffect(() => {
        const fetchPokemonList = async () => {
            const promises = [];
            for (let i = 1; i <= 20; i++) {
                promises.push(getPokemonByName(i.toString()));
            }

            try {
                const pokemonData = await Promise.all(promises);
                setPokemonList(pokemonData);
            } catch (error) {
                console.error(error);
            }
        };

        fetchPokemonList();
    }, []);

    return (
        <View style={styles.container}>
            <PokemonList pokemonList={pokemonList} />
        </View>
    );
}

const styles = pokemonList;

export default PokemonListView;
