import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function ErrorMessage() {
    return (
        <View style={styles.errorContainer}>
            <Text style={styles.errorMessage}>
            ¡Rayos! Parece que este Pokémon es tan raro que ni siquiera el Profesor Oak puede encontrarlo.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    errorContainer: {
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
    },
    errorMessage: {
        fontSize: 16,
        color: 'red',
        textAlign: 'center',
    },
});

export default ErrorMessage;
