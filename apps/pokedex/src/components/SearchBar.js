import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

function SearchBar({ onSearch }) {
    const [pokemonName, setPokemonName] = useState('');

    const handleChangeText = (namePokemon) => setPokemonName(namePokemon);

    const handlePress = () => {
        onSearch(pokemonName);
    };

    return (
        <View style={styles.container}>
            <TextInput
                onChangeText={handleChangeText}
                placeholder="Busca un Pokemon"
                style={styles.input}
            />
            <Button
                onPress={handlePress}
                title="Buscar"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: 300,
        padding: 5,
    },
    input: {
        flex: 1,
    },
});

export default SearchBar;
