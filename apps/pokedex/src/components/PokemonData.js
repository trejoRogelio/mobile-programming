import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';

const PokemonData = ({ data, loading }) => {
  if (loading) return <Text>Loading data...</Text>;

  if (data == null) return;

  const { name, height, weight, abilities } = data;
  return (
    <>
      <Text>Name: {name}</Text>
      <Text>Height: {height}</Text>
      <Text>Weight: {weight}</Text>
      <Text>Abilities: </Text>
      {/* {abilities.map((ability) => (
        <Text>{ability.name}</Text>
      ))} */}
    </>
  );
};

export default PokemonData;
