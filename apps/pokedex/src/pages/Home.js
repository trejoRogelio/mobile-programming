import { TouchableOpacity, StyleSheet, Text, View, Image, TextInput, ActivityIndicator, Alert } from 'react-native';
import { Link } from 'react-router-native';

// Servicios
import { getPokemonByName } from '../services/pokeapi';
import { useState } from 'react';

function Home() {
    const [pokemonName, setPokemonName] = useState('');
    const [pokemon, setPokemon] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handdleChangeText = (namePokemon) => setPokemonName(namePokemon);

    const handdlePress = async () => {
        setLoading(true);
        const lowercasePokemonName = pokemonName.toLowerCase();
        const isValidPokemonName = /^[a-zA-Z\s]+$/.test(lowercasePokemonName.trim());
        
        if (!isValidPokemonName) {
            Alert.alert(
                'Input error',
                'Enter a valid Pokémon name (letters and spaces only)',
                [
                    {
                        text: 'Accept',
                        onPress: () => {
                            console.log('"Accept" button pressed');
                        },
                    },
                ],
                { cancelable: false }
            );
            setLoading(false);
            return;
        }
        try {
            const pokeInformation = await getPokemonByName(lowercasePokemonName);
            setPokemon(pokeInformation);
        } catch (error) {
            setError(!!error);
            Alert.alert(
                'Input error',
                'Enter a valid Pokémon name (letters and spaces only)',
                [
                    {
                        text: 'Accept',
                        onPress: () => {
                            console.log('"Accept" button pressed');
                        },
                    },
                ],
                { cancelable: false }
            );
            setLoading(false);
            return;
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
                    (error || !pokemon && !loading) && 
                    <Image
                        style={{ height: 100, width: 430, marginBottom: 15 }}
                        source={require('../../assets/banner.png')} 
                    />
                }
                <View>
                    <Image
                        style={styles.ash}
                        source={require('../../assets/ash.png')} 
                    />
                    <Text style={styles.text}>¡Find the features of your favorite Pokémon!</Text>
                </View>
                <View style={styles.inputs}>
                    <TextInput
                        onChangeText={handdleChangeText}
                        placeholder='Pokémon name'
                    />
                </View>
                <View>
                    <TouchableOpacity style={styles.button} onPress={handdlePress}>
                        <Text style={styles.buttonText}>Search</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    text: {
        marginTop: 15,
        marginBottom: 15,
        fontSize: 20, 
        color: '#000000', 
        textAlign: 'center', 
    },  
    ash: {
        height: 200, 
        width: 200,
        marginLeft: 90
    },
    inputs: {
        width: 300,
        height: 50, 
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderColor: '#000000',
        borderWidth: 2,
        borderRadius: 3,
        marginBottom: 15,
    },
    button: {
        backgroundColor: '#ffde00', 
        paddingVertical: 10,
        paddingHorizontal: 50,
        borderRadius: 10, 
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 1, 
        elevation: 2
    },
    buttonText: {
        color: '#000000',
        fontSize: 18,
        fontWeight: 'bold', 
    }
});

export default Home;
