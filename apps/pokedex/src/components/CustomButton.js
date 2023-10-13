import React, { useState } from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

function CustomButton({ title, onPress }) {
  const [buttonText, setButtonText] = useState(title);
  const [buttonColor, setButtonColor] = useState('#2196F3');

  const handlePress = () => {
    if (onPress) {
      onPress(); 
    }

    
    setButtonText('Pokemon');
    setButtonColor('#FFD700'); 
  };

  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: buttonColor }]} onPress={handlePress}>
      <View style={styles.buttonContent}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
  },
  buttonContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default CustomButton;
