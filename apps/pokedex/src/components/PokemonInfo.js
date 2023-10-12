import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

function PokemonInfo({ pokemon }) {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center' }}>
        <Text style={styles.title}>Information </Text>
      </View>
      {pokemon.sprites && (
        <View style={styles.centeredImage}>
          <Image
            source={{ uri: pokemon.sprites.front_default }}
            style={styles.image}
          />
        </View>
      )}
      <Text style={styles.label}>Pokemon ID: </Text>
      <Text>{pokemon.id}</Text>
      <Text style={styles.label}>Name: </Text>
      <Text>{pokemon.name}</Text>
      <Text style={styles.label}>Base Experience: </Text>
      <Text>{pokemon.base_experience}</Text>
      <Text style={styles.label}>Height: </Text>
      <Text>{pokemon.height}</Text>
      <Text style={styles.label}>Abilities:</Text>
      <View>
        {pokemon.abilities.map((ability, index) => (
          <Text key={index} style={styles.ability}>
            {ability.is_hidden ? 'Hidden Ability: ' : 'Ability: '}
            {ability.ability.name}
          </Text>
        ))}
      </View>
      <Text style={styles.label}>Types:</Text>
      <View>
        {pokemon.types.map((type, index) => (
          <Text key={index} style={styles.type}>
            {type}
          </Text>
        ))}
      </View>
      <Text style={styles.label}>Stats:</Text>
      <View>
        {pokemon.stats.map((stat, index) => (
          <Text key={index} style={styles.stat}>
            {stat.name}: {stat.value}
          </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  ability: {
    fontSize: 16,
    fontStyle: 'italic',
  },
  type: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'blue',
  },
  stat: {
    fontSize: 16,
  },
  centeredImage: {
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default PokemonInfo;
