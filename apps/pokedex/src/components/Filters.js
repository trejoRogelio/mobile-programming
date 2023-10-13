import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

function Filters({ onFilterChange }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filtros</Text>
      <Text>Por Tipo:</Text>
      <Button title="Agua" onPress={() => onFilterChange('Agua')} />
      <Button title="Fuego" onPress={() => onFilterChange('Fuego')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal:100,
    margin: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Filters;
