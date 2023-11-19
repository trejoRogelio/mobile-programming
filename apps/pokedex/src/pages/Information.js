import React, { useEffect, useState } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

function Information({ route }) {
    const { pokemonData } = route.params;
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!pokemonData) {
            // Manejar el caso en el que no se proporcionan datos del Pokémon.
            setError('No se encontraron datos del Pokémon.');
            setLoading(false);
        } else {
            setLoading(true);
            setError(null);

            // Realiza operaciones con los datos del Pokémon, si es necesario.

            setLoading(false);
        }
    }, [pokemonData]);

    return (
        <View style={styles.container}>
            {loading ? (
                <Text>Cargando...</Text>
            ) : error ? (
                <Text style={{ color: 'red' }}>{error}</Text>
            ) : (
                <>
                    <Image
                        style={styles.image}
                        source={{ uri: pokemonData.sprites.front_default }}
                    />
                    <Text style={styles.name}>Nombre: {pokemonData.name}</Text>
                    <Text style={styles.attribute}>Altura: {pokemonData.height}</Text>
                    <Text style={styles.attribute}>Peso: {pokemonData.weight}</Text>
                    <Text style={styles.attribute}>Tipo(s): {pokemonData.types.map(type => type.type.name).join(', ')}</Text>
                    <Text style={styles.attribute}>Especie: {pokemonData.species.name}</Text> {/* Agregamos el atributo de especie */}
                    <Text style={styles.attribute}>Habilidad(es): {pokemonData.abilities.map(ability => ability.ability.name).join(', ')}</Text>
                    <Text style={styles.attribute}>Experiencia base: {pokemonData.base_experience}</Text>
                    <Text style={styles.attribute}>Movimientos: {pokemonData.moves.map(move => move.move.name).join(', ')}</Text>
                    <Text style={styles.attribute}>Habilidades ocultas: {pokemonData.abilities.filter(ability => ability.is_hidden).map(ability => ability.ability.name).join(', ')}</Text>
                    {/* Agrega más atributos aquí */}
                </>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 200,
        height: 200,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    attribute: {
        fontSize: 16,
    },
});

export default Information;
