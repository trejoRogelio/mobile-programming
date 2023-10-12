import { Button, StyleSheet, Text, View, Image, TextInput, ActivityIndicator, Alert } from 'react-native';
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
            const pokeInformation = await getPokemonByName(pokemonName);
            setPokemon(pokeInformation);
        } catch (error) {
            Alert.alert('Error', 'No se encontró un Pokémon con ese nombre.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <View>
            <View style={styles.main}>
                {
                    loading && <ActivityIndicator style={{ width: 'auto', height: 250 }} size='large' color='#E53939' />
                }
                {
                    !loading && pokemon && (
                        <Link to={`/information/${pokemon.id},${pokemonName}`}>
                            <Image
                                style={{ height: 250, width: 250 }}
                                source={{
                                    uri: pokemon?.sprites?.front_default
                                }}
                            />
                        </Link>
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
                        onChangeText={handleChangeText}
                        placeholder='Buscar un Pokémon'
                    />
                    <Button
                        onPress={handlePress}
                        title='Buscar'
                    />
                </View>
                <View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    inputs: {
        width: 400,
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
});

export default Home;
