import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>Juan Pablo Alcala Lopez UP200231</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#333',
    padding: 10,
  },
  text: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default Footer;
