import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useParams, Link, useHistory } from 'react-router-native';
import { getPokemonById } from '../services/pokeapi';

function Information() {

  const [pokemon, setPokemon] = useState(null);
  const { pokemonid } = useParams();
  const history = useHistory();

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const pokeInformation = await getPokemonById(pokemonid);
        setPokemon(pokeInformation);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPokemonData();
  }, [pokemonid]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Pokemon Information</Text>
      </View>
      <Link to='/Home.js'>
  <Text> Go To Home!!!</Text>
</Link>
      {pokemon && (
        <View style={styles.pokemonInfo}>
          <Text style={styles.infoText}>Name: {pokemon.name}</Text>
          <Text style={styles.infoText}>Height: {pokemon.height}</Text>
          <Text style={styles.infoText}>Weight: {pokemon.weight}</Text>

          {pokemon.types && (
            <Text style={styles.infoText}>Types: {pokemon.types.map((type) => type.type.name).join(', ')}</Text>
          )}
          {pokemon.abilities && (
            <Text style={styles.infoText}>Abilities: {pokemon.abilities.map((ability) => ability.ability.name).join(', ')}</Text>
          )}

          <Text style={styles.infoText}>Base Experience: {pokemon.base_experience}</Text>
          <Text style={styles.infoText}>Order: {pokemon.order}</Text>
          <Text style={styles.infoText}>Is Default: {pokemon.is_default.toString()}</Text>
          <Text style={styles.infoText}>Species URL: {pokemon.species.url}</Text>

          {pokemon.stats && (
            <Text style={styles.infoText}>HP: {pokemon.stats.find(stat => stat.stat.name === 'hp').base_stat}</Text>
          )}
        </View>
      )}


      {/* Botón de enlace para regresar a la página principal */}
      <Link to="/" component={TouchableOpacity} style={styles.homeButton}>
        <Text style={styles.buttonText}>Home</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  header: {
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  pokemonInfo: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    marginTop: 16,
  },
  infoText: {
    fontSize: 18,
    marginBottom: 8,
  },
  button: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    marginTop: 16,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  homeButton: {
    backgroundColor: 'blue', // Cambia el color del botón de regreso a Home
    padding: 10,
    borderRadius: 5,
    marginTop: 16,
    alignItems: 'center',
  },
});

export default Information;