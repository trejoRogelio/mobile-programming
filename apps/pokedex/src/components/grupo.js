import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Grupo() {
  const grupo = "ISC09A Puro sistemas"; // Reemplaza "Tu Nombre" con tu nombre real

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Grupo:</Text>
      <Text style={styles.name}>{grupo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 20,
  },
});

export default Grupo;
