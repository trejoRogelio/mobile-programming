import React from 'react';
import { View, Text } from 'react-native';
import styles from '../components/PokeStyles';

function PokeAttri({ pokemon }) {
    const attributes = [
        { label: 'Nombre', value: pokemon.name },
        { label: 'ID', value: pokemon.id },
        { label: 'Altura', value: pokemon.height },
        { label: 'Peso', value: pokemon.weight },
        { label: 'Tipo(s)', value: pokemon.types.map(type => type.type.name).join(', ') },
        { label: 'Habilidades', value: pokemon.abilities.map(ability => ability.ability.name).join(', ') },
        { label: 'Experiencia base', value: pokemon.base_experience },
        { label: 'Ataque', value: pokemon.stats.find(stat => stat.stat.name === 'attack').base_stat },
        { label: 'Defensa', value: pokemon.stats.find(stat => stat.stat.name === 'defense').base_stat },
        { label: 'Velocidad', value: pokemon.stats.find(stat => stat.stat.name === 'speed').base_stat },
        
    ];

    return (
        <View>
            {attributes.map((attribute, index) => (
                <Text key={index} style={styles.centeredText}>{attribute.label}: {attribute.value}</Text>
            ))}
        </View>
    );
}

export default PokeAttri;
