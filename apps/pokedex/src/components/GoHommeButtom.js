import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';

const GoHomeButton = () => {
  return (
    <View style={styles.container}>
      <Link to="/">
        <Button title="Go Home" />
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});

export default GoHomeButton;
