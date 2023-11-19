import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>© 2023 Mi Aplicación Pokémon</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#E53939',
    padding: 10,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: 'white',
  },
});

export default Footer;
