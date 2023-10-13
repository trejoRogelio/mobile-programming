import React from 'react';
import { Text, View } from 'react-native';

const Atributos = ({ pokemon }) => {
    if (!pokemon) {
        return null;
    }

    return (
        <View>
            <Text>ID: {pokemon.id}</Text>
            <Text>Name: {pokemon.name}</Text>
            <Text>Abilities: {pokemon.abilities.map(ability => ability.ability.name).join(', ')}</Text>
            <Text>Types: {pokemon.types.map(type => type.type.name).join(', ')}</Text>
            <Text>Height: {pokemon.height}</Text>
            <Text>Weight: {pokemon.weight}</Text>
            <Text>Base Experience: {pokemon.base_experience}</Text>
            <Text>HP: {pokemon.stats.find(stat => stat.stat.name === 'hp').base_stat}</Text>
            <Text>Attack: {pokemon.stats.find(stat => stat.stat.name === 'attack').base_stat}</Text>
            <Text>Defense: {pokemon.stats.find(stat => stat.stat.name === 'defense').base_stat}</Text>
        </View>
    );
};

export default Atributos;
