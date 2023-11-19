import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Carrera() {
  const carrera = "Ingeniería en Sistemas Computacionales"; // Reemplaza "Tu Nombre" con tu nombre real

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Carrera:</Text>
      <Text style={styles.title}>{carrera}</Text>
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

export default Carrera;
