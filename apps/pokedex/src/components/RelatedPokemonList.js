import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function RelatedPokemonList({ relatedPokemon }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pokémon Relacionados</Text>
      {relatedPokemon.map((pokemon, index) => (
        <Text key={index}>{pokemon.name}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    margin: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default RelatedPokemonList;
