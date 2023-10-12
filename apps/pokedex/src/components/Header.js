import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Pokémon Search</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'lightblue',
    padding: 10,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Header;
