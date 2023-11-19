import { Button, StyleSheet, Text, View, Image, TextInput, ActivityIndicator } from 'react-native';
import { Link } from 'react-router-native';
import MyName from '../components/nombre';
import Carrera from '../components/carrera';
import Grupo from '../components/grupo';
import { getPokemonByName } from '../services/pokeapi';
import { useState } from 'react';
import PokemonList from '../components/pokemonlist';

function Home() {
    const [pokemonName, setPokemonName] = useState('');
    const [pokemon, setPokemon] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handdleChangeText = (namePokemon) => {
        setPokemonName(namePokemon);
        setError(false);
    }
    
    
    const handdlePress = async () => {
        setLoading(true);
        try {
            const pokeInformation = await getPokemonByName(pokemonName);
            setPokemon(pokeInformation);
        } catch (error) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <View>
            <MyName />
            <Grupo />
            <View style={styles.main}>
                {
                    loading && <ActivityIndicator style={{ width: 'auto', height: 250 }} size='large' color='#E53939' />
                }

                {
                    error && <Text style={styles.errorText}>El Pokemon no se encontró.</Text>
                }

                {
                    !loading && !error && pokemon && (
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
                    !loading && !error && !pokemon && <Image
                        style={{ height: 250 }}
                        source={require('../../assets/pokebola.png')} />
                }

                <View style={styles.inputs}>
                    <TextInput
                        onChangeText={handdleChangeText}
                        placeholder='Teclea el Pokémon'
                    />
                    <Button
                        onPress={handdlePress}
                        title='Buscar'
                    />
                </View>
                <View>
                    <Text>Filters!!!</Text>
                </View>
                <PokemonList></PokemonList>
            </View>
            <Carrera />
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
        color: 'red',
        fontSize: 18,
    },
});

export default Home;
