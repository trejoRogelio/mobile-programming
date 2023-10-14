import React, { useState } from 'react';
import { View, Button, TextInput, Image } from 'react-native';
import { Link } from 'react-router-native';
import { getPokemonByName } from '../services/pokeapi';
import styles from '../components/PokeStyles';
import PokeError from '../components/PokeError';
import PokeList from '../components/PokeList'; 

function Home() {
    const [pokemonName, setPokemonName] = useState('');
    const [pokemon, setPokemon] = useState(null);
    const [error, setError] = useState(false);

    const handleChangeText = (namePokemon) => setPokemonName(namePokemon);

    const handlePress = async () => {
        try {
            const pokeInformation = await getPokemonByName(pokemonName);
            setPokemon(pokeInformation);
            setError(false);
        } catch (error) {
            setError(true);
        }
    };

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <PokeError error={error} />
            <View>
                {pokemon && (
                    <Link to={`/information/${pokemon.id}`}>
                        <Image
                            source={{ uri: pokemon?.sprites?.front_default }}
                            style={{ width: 250, height: 250 }}
                        />
                    </Link>
                )}
                <TextInput
                    onChangeText={handleChangeText}
                    placeholder='Buscar un Pokémon'
                />
                <Button
                    onPress={handlePress}
                    title='Buscar'
                />
                <PokeList/> 
            </View>
        </View>
    );
}

export default Home;
