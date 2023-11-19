import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const PokemonNotFound = () => {
  return (
    <View style={styles.container}>
      <Image
        style={{ height: 250 }}
        source={require('../../assets/pokebola.png')}
      />
      <Text style={styles.errorText}>Pokémon not found</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  errorText: {
    fontSize: 16,
    color: 'red',
  },
});

export default PokemonNotFound;
