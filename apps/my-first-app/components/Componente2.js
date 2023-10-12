import React from 'react'
import { View, Image, StyleSheet } from 'react-native';

export const Componente2 = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/earth.gif')}
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
      width: 250, 
      height: 100, 
      resizeMode: 'contain',
      marginTop: 100,
    },
});
