import { Button, StyleSheet, Text, View, Image, TextInput, ActivityIndicator } from 'react-native';
import { Link } from 'react-router-native';
import MensajeError from '../components/MensajeError';


// Services
import { getPokemonByName } from '../services/pokeapi';
import { useState } from 'react';

function Home() {

    const [pokemonName, setPokemonName] = useState('');
    const [pokemon, setPokemon] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handdleChangeText = (namePokemon) => { setPokemonName(namePokemon) };
    const toLowerCase = (text) => {
        return text.toLowerCase();
    };


    const handdlePress = async () => {
        setLoading(true);
        try {
            const lowercasePokemonName = toLowerCase(pokemonName)
            const pokeInformation = await getPokemonByName(lowercasePokemonName);
            setPokemon(pokeInformation);
            
        } catch (error) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <View>
            <View style={styles.main}>

                {/*Esto es el loading */}
                {
                    loading && <ActivityIndicator style={{ width: 'auto', height: 250 }} size='large' color='#E53939' />
                }


                {/*Esto es cuando encuentra a un pokemon y aparece la imagen del pokemon */}
                {
                    !loading && pokemon && (
                        <>
                            <Link to={`/information/${pokemon.id}`}>
                                <View>
                                    <Image
                                        style={{ height: 350, width: 350 }}
                                        source={
                                            {
                                                uri: pokemon?.sprites?.other?.home?.front_default
                                            }
                                        }
                                    />
                                    <Text style={{fontSize:20}}>Vamo a ver la info de pokemon</Text>
                                </View>
                            </Link>

                        </>

                    )
                }


                {/* Mostrar la Pokébola al inicio */}
                {(!error && !pokemon && !loading) && (
                    <Image style={{ height: 250 }} source={require('../../assets/pokebola.png')} />
                )}


                {/* Mostrar el mensaje de error */}
                {error && <MensajeError />}


                {/* Esta es la parte de buscar mas el botón */}
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
            </View>
        </View >
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
    }
});

export default Home;
