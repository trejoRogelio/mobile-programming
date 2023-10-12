import React from 'react';
import { Button, StyleSheet, Text, View, Image, TextInput, ActivityIndicator, Alert, ScrollView } from 'react-native';
import { Link } from 'react-router-native';

// Services
import { getPokemonByName } from '../services/pokeapi';
import { useState } from 'react';

function Home() {
    const [pokemonName, setPokemonName] = useState('');
    const [pokemon, setPokemon] = useState();
    const [loading, setLoading] = useState(false);

    const handleChangeText = (namePokemon) => setPokemonName(namePokemon);

    const handlePress = async () => {
        setLoading(true);
        try {
            if (!pokemonName.trim()) {
                throw new Error('El campo de búsqueda está vacío');
            }
            const pokeInformation = await getPokemonByName(pokemonName.toLowerCase());
            setPokemon(pokeInformation);
        } catch (error) {
            if (error.message === 'El campo de búsqueda está vacío') {
                Alert.alert('Error', 'El campo de búsqueda no puede estar vacío.');
            } else {
                Alert.alert('Error', 'No se encontró un Pokémon con ese nombre.');
            }
        } finally {
            setLoading(false);
        }
    };

    // Componente PokemonCard definido dentro de Home
    const PokemonCard = ({ pokemon }) => {
        return (
            <View style={{ ...styles.card, ...cardColors }}>
                <Image
                    style={{ height: 250, width: 250 }}
                    source={{
                        uri: pokemon?.sprites?.front_default
                    }}
                />
                <Text style={styles.pokemonName}>Nombre: {pokemon.name}</Text>
                <Text>Altura: {pokemon.height}</Text>
                <Text>Peso: {pokemon.weight}</Text>
                <Text>Experiencia base: {pokemon.base_experience}</Text>
                <Text>Tipo(s): {pokemon.types.map(type => type.type.name).join(', ')}</Text>
                <Text>Habilidades: {pokemon.abilities.map(ability => ability.ability.name).join(', ')}</Text>
                <Text>Ataque: {pokemon.stats[4].base_stat}</Text>
                <Text>Defensa: {pokemon.stats[3].base_stat}</Text>
                <Text>Velocidad: {pokemon.stats[0].base_stat}</Text>
                <Text>Ataque especial: {pokemon.stats[2].base_stat}</Text>
                <Text>Defensa especial: {pokemon.stats[1].base_stat}</Text>
            </View>
        );
    };

    const cardColors = {
        backgroundColor: '#FFCB05',
        borderColor: '#FE654F',
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.main}>
                {
                    loading && <ActivityIndicator style={{ width: 'auto', height: 250 }} size='large' color='#E53939' />
                }
                {
                    !loading && pokemon && (
                        <View style={{ ...styles.card, ...cardColors }}>
                            <PokemonCard pokemon={pokemon} />
                        </View>
                    )
                }
                {
                    (!loading && !pokemon) && (
                        <View>
                            <Image
                                style={{ height: 250 }}
                                source={require('../../assets/pokebola.png')}
                            />
                            <Text>No se encontró un Pokémon con ese nombre.</Text>
                        </View>
                    )
                }
                <View style={styles.inputs}>
                    <TextInput
                        style={styles.input}
                        onChangeText={handleChangeText}
                        placeholder='Buscar un Pokémon'
                    />
                    <Button
                        onPress={handlePress}
                        title='Buscar'
                    />
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    main: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'space-between',
    },
    inputs: {
        width: 400,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    input: {
        height: 40,
        width: 200,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
    },
    card: {
        alignItems: 'center',
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
    },
    pokemonName: {
        fontWeight: 'bold',
    },
});

export default Home;
