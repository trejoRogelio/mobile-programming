import React from 'react';
import { Image, View } from 'react-native';

export const Logo = () => {
  return (
    <View>
      <Image
        style={{
          width: 64,
          height: 64,
        }}
        source={require('./../../assets/logo.png')}
      />
    </View>
  );
};
