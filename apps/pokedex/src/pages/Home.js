import { Button, StyleSheet, Text, View, Image, TextInput, ActivityIndicator } from 'react-native';
import { Link } from 'react-router-native';

// Services
import { getPokemonByName } from '../services/pokeapi';
import { useState } from 'react';

function Home() {
    const [pokemonName, setPokemonName] = useState('');
    const [pokemon, setPokemon] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handdleChangeText = (namePokemon) => setPokemonName(namePokemon);

    const handdlePress = async () => {
        setError(false);
        setLoading(true);
        try {
            const pokeInformation = await getPokemonByName(pokemonName);
            setPokemon(pokeInformation);
        } catch (error) {
            setError(!!error);
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
                    !loading && pokemon && !error ? (
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
                    ) : null
                }
                {
                    (!pokemon && !loading) && <Image
                        style={{ height: 250 }}
                        source={require('../../assets/pokebola.png')} />
                }{
                    error && (
                        <Text style={styles.errorText}>Pokémon not found</Text>
                    )
                }
                <View style={styles.inputs}>
                    <TextInput
                        onChangeText={handdleChangeText}
                        placeholder='Search a Pokemon!'
                    />
                    <Button
                        onPress={handdlePress}
                        title='Search'
                    />
                </View>
                <View>
                    <Link to='/random-pokemon'>
                        <Text > RandomPokemons!!</Text>
                    </Link>
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
        justifyContent: 'space-around'
    },
    errorText: {
        color: 'red', // Puedes cambiar el color a tu preferencia
        fontSize: 20, // Puedes ajustar el tamaño de fuente según tus necesidades
        textAlign: 'center', // Para centrar el texto en el medio
        marginVertical: 10, // Margen vertical para separar el mensaje de otros elementos
      }
});

export default Home;
