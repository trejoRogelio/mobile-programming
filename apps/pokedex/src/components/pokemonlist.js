import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, Image, TouchableOpacity } from 'react-native';
import { Link } from 'react-router-native';
import { getPokemonByName } from '../services/pokeapi';

function PokemonList() {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextPage, setNextPage] = useState(null);

  useEffect(() => {
    fetchPokemonList("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20");
  }, []);

  const fetchPokemonList = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setNextPage(data.next);

      const detailedPokemonList = await Promise.all(
        data.results.map(async (pokemon) => {
          const detailedPokemon = await getPokemonByName(pokemon.name);
          return detailedPokemon;
        })
      );

      setPokemonData((prevData) => [...prevData, ...detailedPokemonList]);
    } catch (error) {
      console.error("Error fetching Pokémon data: ", error);
    }
  };

  const loadMorePokemon = () => {
    if (nextPage) {
      fetchPokemonList(nextPage);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity>
      <Link to={`/information/${item.id}`}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
          <Image source={{ uri: item.sprites.front_default }} style={{ width: 50, height: 50, marginRight: 10 }} />
          <Text>{item.name}</Text>
        </View>
      </Link>
    </TouchableOpacity>
  );

  return (
    <View>
      <FlatList
        data={pokemonData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        onEndReached={loadMorePokemon}
        onEndReachedThreshold={0.1}
      />
    </View>
  );
}

export default PokemonList;
