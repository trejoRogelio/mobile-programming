import React from 'react';
import { Text } from 'react-native';

const PokemonData = ({ data, loading, error }) => {
    if (loading) return <Text>Loading data...</Text>;
    if (error != null)
        return <Text>No se ha encontrado información, intenta de nuevo </Text>;
    if (data == null) return;

    const { name, height, weight, abilities } = data;
    return (
        <>
            <Text>Name: {name}</Text>
            <Text>Height: {+height*10} cm</Text>
            <Text>Weight: {+weight/10} kg</Text>
            <Text>Abilities: </Text>
            {abilities.map((ability) => (
                <Text key={ability.ability.name}>{ability.ability.name}</Text>
            ))}
        </>
    );
};

export default PokemonData;
