import { Button, Text, View, Image, TextInput, ActivityIndicator } from 'react-native';
import { useState } from 'react';
import { Link } from 'react-router-native';
import Aesthetic from '../components/Aesthetic';

import { getPokemonByName } from '../services/pokeapi';

function Home() {
    const [pokemonName, setPokemonName] = useState('');
    const [pokemon, setPokemon] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [notFound, setNotFound] = useState(false);

    const handdleChangeText = (namePokemon) => setPokemonName(namePokemon);

    const handdlePress = async () => {
        setLoading(true);
        setNotFound(false); // Reset notFound flag
        try {
            const lowercaseName = pokemonName.toLowerCase();
            const pokeInformation = await getPokemonByName(lowercaseName);
            setPokemon(pokeInformation);
        } catch (error) {
            setNotFound(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <View>
            <View style={Aesthetic.main}>
                {
                    loading && <ActivityIndicator style={{ width: 'auto', height: 250 }} size='large' color='#E53939' />
                }
                {
                    !loading && pokemon && (
                        <Link to={`/information/${pokemon.id}`}>
                            <Image
                                style={{ height: 250, width: 250 }}
                                source={
                                    {
                                        uri: pokemon?.sprites?.front_default
                                    }
                                }
                            />
                        </Link>
                    )
                }
                {
                    notFound && (
                        <Text style={Aesthetic.textError}>
                            Pokemon no encontrado
                        </Text>
                    )
                }
                {
                    (error || (!pokemon && !loading && !notFound)) && (
                        <Image
                            style={{ height: 250 }}
                            source={require('../../assets/pokebola.png')}
                        />
                    )
                }

                <View style={Aesthetic.inputs}>
                    <TextInput
                        onChangeText={handdleChangeText}
                        placeholder='Busca tu pokemon favorito'
                    />
                    <Button
                        onPress={handdlePress}
                        title='Buscar'
                    />
                </View>
            </View>
        </View>
    );
}

export default Home;
