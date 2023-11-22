import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CustomErrorDisplay = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/pokebola.png')} style={styles.image} />
      <Text style={styles.text}>Pokemon not found. Please try again.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  text: {
    fontSize: 20,
    color: 'red',
  },
});

export default CustomErrorDisplay;
