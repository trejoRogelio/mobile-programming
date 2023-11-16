import React from 'react';
import { View, Text, Image } from 'react-native';

export const ResultInfo = ({ wether }) => {
  return (
    <>
      <View style={{ marginTop: 20 }}>
        <Text>Country: {wether.location.country}</Text>
        <Text>Region: {wether.location.region}</Text>
        <Text>City: {wether.location.name}</Text>
        <Text>Temp: {wether.current.temp_c}</Text>
        <Text>Condition: {wether.current.condition.text}</Text>
      </View>
      <Image
        style={{
          width: 64,
          height: 64,
        }}
        source={{
          uri: 'https:' + wether.current.condition.icon,
        }}
      />
    </>
  );
};
