import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const PokeInfo = ({ pokemon }) => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Image style={styles.image} source={{ uri: pokemon?.sprites?.front_default }} />
                <Text style={styles.pokemonName}>{pokemon?.name}</Text>
                <Text style={styles.pokemonInfo}>Height: {pokemon?.height / 10} m</Text>
                <Text style={styles.pokemonInfo}>Weight: {pokemon?.weight / 10} kg</Text>
                <Text style={styles.sectionTitle}>Type: {pokemon?.types.map(type => type.type.name).join(', ')}</Text>
                <Text style={styles.sectionTitle}>Abilities:</Text>
                <View style={styles.abilitiesContainer}>
                    {pokemon?.abilities.map((ability, index) => (
                        <Text key={index} style={styles.abilityText}>
                            {ability?.ability?.name}
                        </Text>
                    ))}
                </View>
                <Text style={styles.sectionTitle}>Base Stats:</Text>
                <View style={styles.statsContainer}>
                    {pokemon?.stats.map((stat, index) => (
                        <Text key={index} style={styles.statText}>
                            {stat?.stat?.name}: {stat?.base_stat}
                        </Text>
                    ))}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
    card: {
        backgroundColor: '#ffcc00', // Color de fondo de la tarjeta (amarillo Pokémon)
        margin: 10,
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        elevation: 5,
    },
    image: {
        height: 150,
        width: 150,
        marginBottom: 10,
    },
    pokemonName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333333', // Color del nombre del Pokémon (gris oscuro)
    },
    pokemonInfo: {
        fontSize: 18,
        marginBottom: 8,
        color: '#333333', // Color de la información del Pokémon (gris oscuro)
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 12,
        marginBottom: 8,
        color: '#333333', // Color del título de sección (gris oscuro)
    },
    abilitiesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginBottom: 12,
    },
    abilityText: {
        marginHorizontal: 5,
        marginVertical: 2,
        paddingHorizontal: 12,
        paddingVertical: 6,
        backgroundColor: '#4caf50', // Color del fondo del texto de habilidad (verde)
        borderRadius: 10,
        fontSize: 14,
        color: '#ffffff', // Color del texto de habilidad (blanco)
    },
    statsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    statText: {
        marginHorizontal: 5,
        marginVertical: 2,
        paddingHorizontal: 12,
        paddingVertical: 6,
        backgroundColor: '#ff9800', // Color del fondo del texto de estadística (naranja)
        borderRadius: 10,
        fontSize: 14,
        color: '#ffffff', // Color del texto de estadística (blanco)
    },
});

export default PokeInfo;
