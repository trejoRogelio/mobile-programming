import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, Image, TextInput, ActivityIndicator } from 'react-native';
import { Link } from 'react-router-native';
import { getPokemonByName } from '../services/pokeapi';
import PokemonNotFound from '../components/PokemonNotFound';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ButtonComponent from '../components/ButtonComponent';

function Home() {
  const [pokemonName, setPokemonName] = useState('');
  const [pokemon, setPokemon] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const handdleChangeText = (namePokemon) => {
    setPokemonName(namePokemon);
    setNotFound(false);
  };

  const handdlePress = async () => {
    setLoading(true);
    try {
      const pokeInformation = await getPokemonByName(pokemonName);
      setPokemon(pokeInformation);
    } catch (error) {
      setError(!!error);
      setNotFound(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.main}>
        {loading && (
          <ActivityIndicator style={styles.activityIndicator} size='large' color='#E53939' />
        )}
        {!loading && pokemon && (
          <Link to={`/information/${pokemon.id}`}>
            <Image
              style={styles.pokemonImage}
              source={{
                uri: pokemon?.sprites?.front_default
              }}
            />
          </Link>
        )}
        {(error || notFound || (!pokemon && !loading)) && (
          notFound ? (
            <PokemonNotFound />
          ) : (
            <Image
              style={styles.errorImage}
              source={require('../../assets/pokebola.png')}
            />
          )
        )}
        <View style={styles.inputs}>
          <TextInput
            style={styles.textInput}
            onChangeText={handdleChangeText}
            placeholder='Search a Pokémon!'
          />
          <ButtonComponent style={styles.searchButton} title="Search" onPress={handdlePress} />
        </View>
        <View>
          <Text style={styles.filtersText}>Filters!!!</Text>
        </View>
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  main: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  activityIndicator: {
    width: 'auto',
    height: 250,
  },
  pokemonImage: {
    height: 250,
    width: 250,
  },
  errorImage: {
    height: 250,
  },
  inputs: {
    width: 400,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  textInput: {
    borderBottomWidth: 1,
    borderColor: 'gray',
    padding: 10,
    width: 200,
  },
  searchButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  filtersText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Home;
