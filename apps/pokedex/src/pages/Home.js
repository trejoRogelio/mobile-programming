import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, Image, TextInput, ActivityIndicator, ScrollView } from 'react-native';
import { getPokemonByName } from '../services/pokeapi';

import Header from '../components/Header';
import Footer from '../components/Footer';

function Home() {
  const [pokemonName, setPokemonName] = useState('');
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleChangeText = (namePokemon) => setPokemonName(namePokemon);

  const handlePress = async () => {
    // Validar si el campo de búsqueda está vacío
    if (!pokemonName.trim()) {
      setError(true);
      setPokemon(null);
      setLoading(false);
      return;
    }

    setLoading(true);

    try {
      const pokeInformation = await getPokemonByName(pokemonName.toLowerCase());
      setPokemon(pokeInformation);
      setError(false); // Reset error state on successful fetch
    } catch (error) {
      setPokemon(null); // Clear existing Pokemon on error
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Header title="POKE INFORMATION" />
        <View style={styles.main}>
          {loading && <ActivityIndicator style={styles.spinner} size='large' color='#318CE7' />}
          {pokemon && (
            <>
              <Image
                style={[styles.pokemonImage, styles.imageWithBorder]}
                source={{
                  uri: pokemon?.sprites?.front_default,
                }}
              />
              <Text style={styles.attribute}>Nombre: {pokemon.name}</Text>
              <Text style={styles.attribute}>Altura: {pokemon.height}</Text>
              <Text style={styles.attribute}>Peso: {pokemon.weight}</Text>
              {pokemon.types && (
                <Text style={styles.attribute}>Tipos: {pokemon.types.map((type) => type.type.name).join(', ')}</Text>
              )}
              {pokemon.abilities && (
                <Text style={styles.attribute}>Habilidades: {pokemon.abilities.map((ability) => ability.ability.name).join(', ')}</Text>
              )}
              <Text style={styles.attribute}>Experiencia Base: {pokemon.base_experience}</Text>
              <Text style={styles.attribute}>Orden: {pokemon.order}</Text>
              <Text style={styles.attribute}>Es Predeterminado: {pokemon.is_default.toString()}</Text>
              <Text style={styles.attribute}>URL de la Especie: {pokemon.species.url}</Text>
              {pokemon.stats && (
                <Text style={styles.attribute}>HP: {pokemon.stats.find(stat => stat.stat.name === 'hp').base_stat}</Text>
                // Agregar más estadísticas o atributos según sea necesario
              )}
            </>
          )}
          {(error || (!pokemon && !loading)) && (
            <View style={styles.errorContainer}>
              <Image style={styles.pokebolaImage} source={require('../../assets/pokebola.png')} />
              {error && <Text style={styles.errorText}>{pokemonName.trim() ? '¡Pokemon no encontrado!' : '¡Ingresa un nombre de Pokemon!'}</Text>}
            </View>
          )}
          <View style={styles.inputs}>
            <View style={styles.searchBox}>
              <TextInput
                style={styles.input}
                onChangeText={handleChangeText}
                placeholder='Buscar un Pokemon'
                placeholderTextColor='#aaa'
              />
            </View>
            <Button
              onPress={handlePress}
              title='Buscar'
              buttonStyle={styles.searchButton}
              titleStyle={styles.searchButtonText}
            />

          </View>
          {!pokemon && (
            <View style={styles.filters}>
              <Text></Text>
            </View>
          )}
        </View>
        <Footer />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  main: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 4, // Sombra en Android
    shadowColor: '#000', // Sombra en iOS
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  spinner: {
    width: 'auto',
    height: 250,
    marginBottom: 20,
  },
  pokemonImage: {
    height: 250,
    width: 250,
    marginBottom: 20,
  },
  imageWithBorder: {
    borderWidth: 2,
    borderColor: '#318CE7',
    borderRadius: 10,
  },
  attribute: {
    fontSize: 16,
    marginBottom: 8,
  },
  errorContainer: {
    marginBottom: 20,
  },
  pokebolaImage: {
    height: 250,
  },
  errorText: {
    color: 'red',
    marginTop: 10,
    fontSize: 16,
    textAlign: 'center',
  },
  inputs: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  searchBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#318CE7',
    borderRadius: 5,
    marginRight: 10,
    overflow: 'hidden',
    margin: 10,
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: '#333', // Color del texto del input
  },
  searchButton: {
    backgroundColor: '#318CE7',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 10,
  },
  searchButtonText: {
    color: '#fff',
    fontSize: 18,
    
  },
  filters: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
});

export default Home;
