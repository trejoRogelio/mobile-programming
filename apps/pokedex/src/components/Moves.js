import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Moves = ({ moves }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Moves:</Text>
      <View style={styles.borderBox}>
        <Text style={styles.moves}>{moves.join(', ')}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 2,
    marginTop: 10,
  },
  borderBox: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 5,
    alignItems: 'center',
    borderRadius: 5,
  },
  moves: {
    fontSize: 15,
  },
});

export default Moves;
