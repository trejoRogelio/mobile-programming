import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState('');

  const onPressHandle = () => {
    if (!city.trim()) {
      alert('Por favor, ingresa un nombre de ciudad válido');
      return;
    }
    onSearch(city);
  };

  return (
    <View>
      <Text style={styles.text}>Write a City</Text>
      <TextInput
        placeholder='City'
        style={styles.input}
        value={city}
        onChangeText={(text) => setCity(text)}
      />
      <Button title='Search' onPress={onPressHandle} />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#8CC7FF', // Cambia el color del texto a #8CC7FF
  },
  input: {
    width: 250,
    marginVertical: 10,
  },
});
