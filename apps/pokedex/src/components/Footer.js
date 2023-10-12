import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>Hecho Por Cristopher Kaleb Ruiz Ortiz UP200674</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: 'lightgray',
    padding: 10,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
  },
});

export default Footer;
