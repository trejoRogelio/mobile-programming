import React from 'react';
import { View, StyleSheet } from 'react-native';

function Background() {
  return (
    <View style={styles.redBackground}></View>
  );
}

const styles = StyleSheet.create({
  redBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'grey',
  },
});

export default Background;