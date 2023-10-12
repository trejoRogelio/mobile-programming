import { Button, StyleSheet,  View, Image, TextInput, ActivityIndicator, Alert, Text } from 'react-native';
import { Link } from 'react-router-native';


// Services
import { getPokemonByName } from '../services/pokeapi';
import { useState } from 'react';
import { ListPokemon } from '../components/List/ListPokemon';

function Home() {
    const [pokemonName, setPokemonName] = useState('');
    const [pokemon, setPokemon] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleChangeText = (namePokemon) => setPokemonName(namePokemon);

    const handlePress = async () => {
        setLoading(true);
        try {
            const pokeInformation = await getPokemonByName(pokemonName.toLowerCase());
            setPokemon(pokeInformation);
        } catch (error) {
            Alert.alert('Pokemon No encontrado!');
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={{flex:1}}>
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
                    (error || !pokemon && !loading) && <Image
                        style={{ height: 250 }}
                        source={require('../../assets/pokebola.png')} />
                }
                <View style={styles.inputs}>
                    <TextInput
                        style={{borderColor:'black',borderWidth:1 ,width:'50%', marginRight:10 ,borderRadius:10 }}
                        onChangeText={handleChangeText}
                        placeholder='Search a Pokemon!'
                    />
                    <Button
                        onPress={handlePress}
                        title='Search'
                    />
                </View>
            </View>
            <ListPokemon/>
            <View style={{height:100 ,marginBottom:50}}><Text>a</Text></View>
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
        justifyContent: 'center'
    }
});

export default Home;
