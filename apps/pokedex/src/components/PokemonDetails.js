import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function PokemonDetails({ pokemon }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Detalles del Pokémon</Text>
            <Text>Nombre: {pokemon.name}</Text>
            <Text>Tipo: {pokemon.types[0].type.name}</Text>
            <Text>HP: {pokemon.stats[0].base_stat}</Text>
            <Text>Ataque: {pokemon.stats[1].base_stat}</Text>
            <Text>Defensa: {pokemon.stats[2].base_stat}</Text>
            <Text>Velocidad: {pokemon.stats[5].base_stat}</Text>
            <Text>Experiencia base: {pokemon.base_experience}</Text>
            <Text>Altura: {pokemon.height}</Text>
            <Text>Peso: {pokemon.weight}</Text>
            <Text>Habilidades: {pokemon.abilities.map(ability => ability.ability.name).join(', ')}</Text>
            <Text>Orden en la Pokédex: {pokemon.order}</Text>
            <Text>Color: {pokemon.color ? pokemon.color.name : 'Desconocido'}</Text>
            <Text>Forma base: {pokemon.forms[0].name}</Text>
            {/* Agrega más atributos aquí */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        margin: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default PokemonDetails;
