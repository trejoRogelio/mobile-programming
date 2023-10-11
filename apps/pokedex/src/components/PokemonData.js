import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../../App';

const PokemonData = ({ data, loading, error }) => {
  if (loading)
    return <Text style={styles.pokemondata_container}>Loading data...</Text>;
  if (error != null)
    return (
      <Text style={styles.pokemondata_container}>
        No se ha encontrado información, intenta de nuevo
      </Text>
    );
  if (data == null) return;

  const { name, height, weight, abilities, moves = data.moves[0] } = data;
  return (
    <View style={styles.pokemondata_container}>
      <Text>
        <Text style={styles.txt_bold}>Name: </Text>
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </Text>

      <Text>
        <Text style={styles.txt_bold}>height: </Text>
        {+height * 10} cm
      </Text>
      <Text>
        <Text style={styles.txt_bold}>Weight: </Text>
        {+weight / 10} kg
      </Text>
      <Text style={styles.txt_bold}>Abilities: </Text>
      {abilities.slice(0, 5).map((ability) => (
        <Text key={ability.ability.name}>
          -{' '}
          {ability.ability.name.charAt(0).toUpperCase() +
            ability.ability.name.slice(1)}
        </Text>
      ))}
      <Text style={styles.txt_bold}>Moves: </Text>
      {moves.slice(0, 7).map((move) => (
        <Text key={move.move.name}>
          - {move.move.name.charAt(0).toUpperCase() + move.move.name.slice(1)}
        </Text>
      ))}
    </View>
  );
};

export default PokemonData;
