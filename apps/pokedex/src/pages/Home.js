import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, ActivityIndicator, StyleSheet, Image } from 'react-native';
import { Link } from 'react-router-native';
import { getPokemonByName, getAllPokemon } from '../services/pokeapi';  // Importa la función para obtener todos los Pokémon
import Filters from '../components/Filters';

const styles = StyleSheet.create({
    main: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    inputs: {
        width: 400,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
});

function Home() {
    const [pokemonName, setPokemonName] = useState('');
    const [pokemon, setPokemon] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [pokemonList, setPokemonList] = useState([]);  // Estado para almacenar la lista de Pokémon
    const [filteredPokemonList, setFilteredPokemonList] = useState([]);  // Estado para almacenar la lista filtrada

    const handleChangeText = (namePokemon) => setPokemonName(namePokemon);

    const handlePress = async () => {
        setLoading(true);
        try {
            const pokeInformation = await getPokemonByName(pokemonName);
            setPokemon(pokeInformation);
        } catch (error) {
            setError(!!error);
        } finally {
            setLoading(false);
        }
    }

    const handleFilterChange = (type) => {
        // Filtra la lista de Pokémon por el tipo seleccionado
        const filtered = pokemonList.filter(pokemon => pokemon.type === type);
        setFilteredPokemonList(filtered);
    };

    useEffect(() => {
        async function loadPokemonList() {
            try {
                const allPokemon = await getAllPokemon();
                setPokemonList(allPokemon);
                setFilteredPokemonList(allPokemon);
            } catch (error) {
                console.error('Error al cargar la lista de Pokémon:', error);
            }
        }
        loadPokemonList();
    }, []);

    return (
        <View>
            <View style={styles.main}>
                {loading && <ActivityIndicator style={{ width: 'auto', height: 250 }} size='large' color='#E53939' />}
                {!loading && pokemon ? (
                    <>
                        <Link to={`/information/${pokemon.id}`}>
                            <Image
                                style={{ height: 250, width: 250 }}
                                source={{
                                    uri: pokemon?.sprites?.front_default,
                                }}
                            />
                        </Link>
                    </>
                ) : (
                    <Image
                        style={{ height: 250 }}
                        source={require('../../assets/pokebola.png')}
                    />
                )}

                {error && (
                    <Text style={{ color: 'red' }}>Pokémon no encontrado. Inténtalo de nuevo.</Text>
                )}

                <View style={styles.inputs}>
                    <TextInput
                        onChangeText={handleChangeText}
                        placeholder='Buscar un Pokémon'
                    />
                    <Button
                        onPress={handlePress}
                        title='Buscar'
                    />
                </View>

            </View>
        </View>
    );
}

export default Home;
