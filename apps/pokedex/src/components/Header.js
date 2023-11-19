import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ title }) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'black', // Cambiado a color negro
        padding: 15,
        alignItems: 'center',
    },
    headerText: {
        color: '#fff',
        fontSize: 18,
    },
});

export default Header;
