import React, { useState } from 'react';
import { Text, View, TextInput, Button, Image, ActivityIndicator, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import { getPokemonByName } from '../services/pokeapi';
import GoHomeButton from '../components/GoHommeButtom';
import CustomErrorDisplay from '../components/CustomErrorDisplay';
import Footer from '../components/Footer';

function Home() {
  const [pokemonName, setPokemonName] = useState('');
  const [pokemon, setPokemon] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleChangeText = (name) => setPokemonName(name);

  const handlePress = async () => {
    setLoading(true);
    try {
      const pokeInformation = await getPokemonByName(pokemonName);
      setPokemon(pokeInformation);
      setError(false);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View>
      <View style={styles.main}>
        {loading && <ActivityIndicator size="large" color="#E53939" />}
        {!loading && pokemon ? (
          <Link to={`/information/${pokemon.id}`}>
            <Image
              style={{ width: 200, height: 200 }}
              source={{ uri: pokemon.sprites.front_default }}
            />
          </Link>
        ) : error ? (
          <CustomErrorDisplay /> // Utiliza el componente de error personalizado
        ) : (
          <Image style={{ height: 250 }} source={require('../../assets/pokebola.png')} />
        )}
        <View style={styles.inputs}>
          <TextInput onChangeText={handleChangeText} placeholder="Search a Pokemon!" />
          <Button onPress={handlePress} title="Search" />
        </View>
        <GoHomeButton /> {/* Agrega el botón de "Go Home" */}
        <View>
          <Text>Filters!!!</Text>
        </View>
        <Footer /> {/* Agrega el componente de footer con tu nombre y número de estudiante */}
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
  },
});

export default Home;
