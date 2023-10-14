import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import { Link } from 'react-router-native';
import { getPokemonByName } from '../services/pokeapi';
import styles from '../components/PokeStyles';

function PokeList() {
    const [pokemonList, setPokemonList] = useState([]);

    useEffect(() => {
        const fetchPokemonData = async () => {
            const promises = [];

            for (let i = 1; i <= 20; i++) {
                promises.push(getPokemonByName(i.toString()));
            }

            try {
                const pokemonData = await Promise.all(promises);

                const parsedData = pokemonData.map((pokemon) => ({
                    id: pokemon.id,
                    name: pokemon.name,
                    image: pokemon.sprites.front_default,
                }));

                setPokemonList(parsedData);
            } catch (error) {
                console.error(error);
            }
        };

        fetchPokemonData();
    }, []);

    const renderPokemonItem = ({ item }) => (
        <Link to={`/information/${item.id}`} key={item.id} style={styles.link}>
            <View style={styles.pokemonItem}>
                <Image source={{ uri: item.image }} style={styles.pokemonImage} />
                <Text style={styles.pokemonName}>{item.name}</Text>
            </View>
        </Link>
    );

    return (
        <FlatList
            data={pokemonList}
            renderItem={renderPokemonItem}
            keyExtractor={(item) => item.id.toString()}
            style={styles.container}
        />
    );
}

export default PokeList;
