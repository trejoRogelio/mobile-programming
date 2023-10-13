import { Button, StyleSheet, Text, View, Image, TextInput, ActivityIndicator, ToastAndroid, ScrollView} from 'react-native';
import { Link } from 'react-router-native';


// Services
import { getPokemonByName } from '../services/pokeapi';
import { useState } from 'react';
import { PokemonList } from '../components/PokemonList';

function Home() {
    const [pokemonName, setPokemonName] = useState('');
    const [pokemon, setPokemon] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handdleChangeText = (namePokemon) => setPokemonName(namePokemon);

    const handdlePress = async () => {
        setLoading(true);
        try {
            const pokeInformation = await getPokemonByName(pokemonName.toLowerCase().trim());
            if(!pokeInformation) {
                ToastAndroid.showWithGravityAndOffset(
                    'Not found',
                    ToastAndroid.SHORT,
                    ToastAndroid.BOTTOM,
                    0,
                    210
                );
            } else {
                setPokemon(pokeInformation);
                console.log(pokeInformation.sprites?.front_default);
                setError(false);
            }
        } catch (error) {
            setError(!!error);
            ToastAndroid.showWithGravityAndOffset(
                'Error',
                ToastAndroid.SHORT,
                ToastAndroid.BOTTOM,
                0,
                210
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <ScrollView>
            <View style={styles.main}>
                {
                    loading && <ActivityIndicator style={{ width: 'auto', height: 250 }} size='large' color='#E53939' />
                }
                {
                    !loading && pokemon && !error && (
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
                    (error || !pokemon && !loading) && <Image
                        style={{ height: 250 }}
                        source={require('../../assets/pokebola.png')} />
                }
                <View style={styles.inputContainer}>
                    <View style={styles.input}>
                        <TextInput
                            onChangeText={handdleChangeText}
                            placeholder='Search a Pokemon!'
                        />
                    </View>
                    <Button
                        onPress={handdlePress}
                        title='Search'
                    />
                </View>
                <View>
                    <PokemonList/>
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
    inputs: {
        width: 400,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    inputContainer: {
        padding: 20,
        alignItems: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#616163',
        borderRadius: 15,
        backgroundColor: '#F1F7ED',
        margin: 10,
        padding: 10,
        width: 250,
    },
});

export default Home;
