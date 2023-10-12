import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const PokemonData = ({ pokemon }) => {
    return (
        <View style={styles.container}>
            <View style={styles.item}>
                <Image source={{ uri: pokemon.sprites.front_default }} style={styles.image} />
                <Text style={styles.name}>{pokemon.name}</Text>
                <Text style={styles.attribute}>Altura: {pokemon.height}</Text>
                <Text style={styles.attribute}>Peso: {pokemon.weight}</Text>
                <Text style={styles.attribute}>Tipo: {pokemon.types[0].type.name}</Text>
                <Text style={styles.attribute}>Experiencia base: {pokemon.base_experience}</Text>
                <Text style={styles.attribute}>Habilidades:</Text>
                {pokemon.abilities.map((ability, index) => (
                    <Text key={index} style={styles.ability}>
                        {ability.ability.name}
                    </Text>
                ))}
                <Text style={styles.attribute}>Estadísticas:</Text>
                {pokemon.stats.map((stat, index) => (
                    <Text key={index} style={styles.stat}>
                        {stat.stat.name}: {stat.base_stat}
                    </Text>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#5874b3',
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: '#313f6f',
        borderRadius: 10,
    },
    
    image: {
        width: 150,
        height: 150,
    },
    name: {
        fontSize: 20,
        color: '#f3cf2f',
        fontWeight: 'bold',
    },
    attribute: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold'
    },
    ability: {
        fontSize: 14,
        marginLeft: 20,
        color: 'white'
    },
    stat: {
        fontSize: 14,
        marginLeft: 20,
        color: 'white'
    },
});

export default PokemonData;
