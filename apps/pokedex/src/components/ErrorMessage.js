import React from 'react';
import { View, Text } from 'react-native';

const ErrorMessage = () => {
  return (
    <View style={{ alignItems: 'center', backgroundColor: '#C72C8F', marginBottom:10 }}>
      <Text style={{color: '#FFF'}}>Pokemon no encotrado, intenta con uno nuevo</Text>
    </View>
  );
};

export default ErrorMessage;

