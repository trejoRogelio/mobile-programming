import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native';

export const Componente1 = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Bienvenido a{'\n'}Weather App</Text>
            <Image
                source={require('../assets/weather.png')}
                style={styles.image}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: 64, 
      height: 64, 
      resizeMode: 'contain',
      marginTop: 10,
      marginBottom: 50
    },
    text: {
        fontSize: 30,
        color: "#8CC7FF"
    }
});
