import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function WeatherDisplay({ weather }) {
  return (
    <View style={{ marginTop: 20 }}>
      <Text style={styles.text}>Country: {weather.location.country}</Text>
      <Text style={styles.text}>Region: {weather.location.region}</Text>
      <Text style={styles.text}>City: {weather.location.name}</Text>
      <Text style={styles.text}>Temp: {weather.current.temp_c}</Text>
      <Text style={styles.text}>Condition: {weather.current.condition.text}</Text>
      <Image
        style={{
          width: 64,
          height: 64,
        }}
        source={{
          uri: 'https:' + weather.current.condition.icon,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#8CC7FF'
  },
});
