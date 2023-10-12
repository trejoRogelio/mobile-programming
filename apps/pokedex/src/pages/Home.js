import { Button, StyleSheet, Text, View, Image, TextInput, ActivityIndicator } from 'react-native';
import { Link } from 'react-router-native';
import MensajeError from '../components/MensajeError';
import { getPokemonByName } from '../services/pokeapi';
import { useState } from 'react';
import PokemonTypeList from '../components/PokemonTypeList';

function Home() {
    const [pokemonName, setPokemonName] = useState('');
    const [pokemon, setPokemon] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [isErrorModalVisible, setIsErrorModalVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');


    const handleInputChange = (namePokemon) => {
        const lowerCaseName = namePokemon.toLowerCase();
        setPokemonName(lowerCaseName);
    };

    const handlePress = async () => {
        setLoading(true);

        if (!pokemonName) {
            setError(true);
            setErrorMessage('Creo que has olvidado mencionar algún Pokemon');
            setIsErrorModalVisible(true);
            setLoading(false);
            return;
        }

        try {
            const pokeInformation = await getPokemonByName(pokemonName);
            if (pokeInformation) {
                setPokemon(pokeInformation);
            } else {
                setError(true);
                setErrorMessage('No se encontraron registros en la API.');
                setIsErrorModalVisible(true);
            }
        } catch (error) {
            setError(true);
            setErrorMessage('Ups no haz escrito bien el nombre del Pokemon');
            setIsErrorModalVisible(true);
        } finally {
            setLoading(false);
        }
    };

    const handleCloseError = () => {
        setIsErrorModalVisible(false);
    };


    return (
        <View>
            <View style={styles.main}>
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
                    (error || (!pokemon && !loading)) && <Image
                        style={styles.imagenS}
                        source={require('../../assets/pokeball.png')} />
                }
                <View style={styles.inputs}>
                    <TextInput
                        onChangeText={handleInputChange}
                        placeholder='Search a Pokemon!'
                    />
                    <Button
                        onPress={handlePress}
                        title='Search'
                    />
                </View>
            </View>
            <MensajeError
                mensaje={errorMessage}
                isVisible={isErrorModalVisible}
                onClose={handleCloseError}
            />
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
    imagenS: {
        margin: 10,
        height: 230,
        width: 230
    }
});


export default Home;
