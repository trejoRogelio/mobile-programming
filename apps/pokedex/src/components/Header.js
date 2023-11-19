import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Mi Aplicación Pokémon</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#E53939',
    padding: 10,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    color: 'white',
  },
});

export default Header;
