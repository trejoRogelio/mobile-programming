import { Button, ScrollView, View, Image, TextInput, ActivityIndicator } from 'react-native';
import { Link } from 'react-router-native';
import { useState } from 'react';
import PokemonNotFoundError from '../components/PokemonNotFoundError'; // Asegúrate de tener la ruta correcta
import { getPokemonByName } from '../services/pokeapi';
import { homeStyles } from '../components/styles';
import PokemonListView from '../components/PokemonListView';

function Home() {
    const [pokemonName, setPokemonName] = useState('');
    const [pokemon, setPokemon] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handdleChangeText = (namePokemon) => {
        setPokemonName(namePokemon);
    }

    const handdlePress = async () => {
        setLoading(true);
        setError(false); // Resetear el estado de error antes de la nueva búsqueda
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
        <ScrollView>
            <View style={homeStyles.main}>
                {
                    loading && <ActivityIndicator style={{ width: 'auto', height: 250 }} size='large' color='#E53939' />
                }
                {
                    !loading && pokemon && (
                        <Link to={`/information/${pokemon.id}`}>
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
                    (error || (!loading && !pokemon)) && <Image
                        style={{ height: 250 }}
                        source={require('../../assets/pokebola.png')}
                    />
                }
                {
                    (!loading && !pokemon && error) && <PokemonNotFoundError /> // Muestra el componente solo si no se encontró el Pokémon
                }
                <View style={homeStyles.inputs}>
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
                    <PokemonListView></PokemonListView>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = homeStyles;

export default Home;
