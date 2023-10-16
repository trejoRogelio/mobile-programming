import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ProgressBar from 'react-native-progress/Bar';

function PokemonInfo({ pokemon }) {
    return (
        <View style={styles.container}>
            <Text style={{textTransform:'capitalize'}}>{pokemon.name}</Text>
            <Text>Height: {pokemon.height}</Text>
            <Text>Weight: {pokemon.weight}</Text>
            <Text>Habilidades: {pokemon.abilities.map(ability => ability.ability.name).join(', ')}</Text>
            <Text>Base Experience: {pokemon.base_experience}/400</Text>
            <ProgressBar color={'#ed1c24'} progress={pokemon.base_experience / 400} width={300} height={20} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default PokemonInfo;
