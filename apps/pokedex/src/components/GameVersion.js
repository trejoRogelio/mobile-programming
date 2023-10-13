import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const GameVersion = ({ gameVersions }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Game Versions:</Text>
      <View style={styles.borderBox}>
        <Text style={styles.versions}>{gameVersions.join(', ')}</Text>
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
  versions: {
    fontSize: 10,
  },
});

export default GameVersion;
