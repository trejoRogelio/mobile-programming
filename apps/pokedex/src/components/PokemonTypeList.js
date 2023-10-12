import React from 'react';
import { Text, View, FlatList } from 'react-native';
import PokemonInfo from './PokemonInfo';

function PokemonTypeList({ type, pokemonList }) {
  return (
    <View>
      <Text>Type: {type}</Text>
      console.log(pokemonList);
      <FlatList
        data={pokemonList}
        keyExtractor={(pokemon) => pokemon.id.toString()}
        renderItem={({ item }) => <PokemonInfo pokemon={item} />}
      />
    </View>
  );
}

export default PokemonTypeList;
