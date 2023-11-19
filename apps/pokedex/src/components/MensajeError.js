import { View, Text, StyleSheet, useState, useEffect } from "react-native";
import React from 'react'

const MensajeError = () => {

    return (
        <View style={styles.errorContainer}>
            <Text style={styles.errorText}>No hay Pokemon a la vista, continúa con tu aventura.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    errorContainer: {
        backgroundColor: 'red',
        padding: 10,
        margin: 10,
        borderRadius: 5,
    },
    errorText: {
        color: 'white',
        fontSize: 16,
    },
});

export default MensajeError;
