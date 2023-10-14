import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, Image } from 'react-native';
import { Link, useParams } from 'react-router-native';
import { getPokemonById } from '../services/pokeapi';
import PokeAttri from '../components/PokeAttri';
import styles from '../components/PokeStyles'; // Importa los estilos

function Information() {
    const [pokemon, setPokemon] = useState(null);
    const { pokemonid } = useParams();

    useEffect(() => {
        async function fetchPokemon() {
            try {
                const pokeInformation = await getPokemonById(pokemonid);
                setPokemon(pokeInformation);
            } catch (error) {
                console.error(error);
            }
        }

        fetchPokemon();
    }, [pokemonid]);

    if (!pokemon) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#E53939" />
            </View>
        );
    }

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Image
                source={{ uri: pokemon?.sprites?.front_default }}
                style={{ width: 200, height: 200, marginTop: 20 }}
            />
            <PokeAttri pokemon={pokemon} />
            <Link to="/">
                <View style={styles.fullWidthButton}>
                    <Text style={styles.buttonText}>Volver al Inicio</Text>
                </View>
            </Link>
        </View>
    );
}

export default Information;
