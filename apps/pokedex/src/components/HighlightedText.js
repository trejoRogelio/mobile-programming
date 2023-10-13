import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function HighlightedText({ text }) {
  return (
    <View style={styles.highlightedTextContainer}>
      <Text style={styles.highlightedText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  highlightedTextContainer: {
    backgroundColor: '#E53939', // Cambia el color de fondo del texto destacado
    padding: 10,
    borderRadius: 5,
  },
  highlightedText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default HighlightedText;
