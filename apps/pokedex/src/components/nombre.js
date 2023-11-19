import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function MyName() {
  const yourName = "Daniel García de Luna"; // Reemplaza "Tu Nombre" con tu nombre real

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Alumno:</Text>
      <Text style={styles.name}>{yourName}</Text>
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

export default MyName;
