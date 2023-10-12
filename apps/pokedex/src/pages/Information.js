import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Link, useParams } from 'react-router-native';
import { getPokemonById } from '../services/pokeapi';

function Information() {
  const [pokemon, setPokemon] = useState(null);
  const { pokemonid } = useParams();

  useEffect(() => {
    const fetchPokemonInfo = async () => {
      try {
        const pokeInformation = await getPokemonById(pokemonid);
        setPokemon(pokeInformation);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPokemonInfo();
  }, [pokemonid]);

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Information Page</Text>


      {pokemon && (
        <View style={styles.pokemonInfo}>
          <Text style={styles.infoTitle}>ID:</Text>
          <Text style={styles.infoText}>{pokemonid}</Text>
          <Text style={styles.infoTitle}>Name:</Text>
          <Text style={styles.infoText}>{pokemon.name}</Text>
          <Text style={styles.infoTitle}>Height:</Text>
          <Text style={styles.infoText}>{pokemon.height}</Text>
          <Text style={styles.infoTitle}>Weight:</Text>
          <Text style={styles.infoText}>{pokemon.weight}</Text>
          <Text style={styles.infoTitle}>Abilities:</Text>
          <View style={styles.abilitiesList}>
            {pokemon.abilities.map((ability, index) => (
              <Text key={index} style={styles.abilityItem}>
                {ability.ability.name}
              </Text>
            ))}
          </View>
          <Text style={styles.infoTitle}>Types:</Text>
          <View style={styles.typesList}>
            {pokemon.types.map((type, index) => (
              <Text key={index} style={styles.typeItem}>
                {type.type.name}
              </Text>
            ))}
          </View>
          <Text style={styles.infoTitle}>Base Experience:</Text>
          <Text style={styles.infoText}>{pokemon.base_experience}</Text>
          <Text style={styles.infoTitle}>Order:</Text>
          <Text style={styles.infoText}>{pokemon.order}</Text>
          <Text style={styles.infoTitle}>Is Default:</Text>
          <Text style={styles.infoText}>{pokemon.is_default ? 'Yes' : 'No'}</Text>
          <Text style={styles.infoTitle}>Species:</Text>
          <Text style={styles.infoText}>{pokemon.species.name}</Text> 
        </View>
      )}
        <Link to='/'>
        <Text style={styles.linkText}>Go To Home</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  pokemonId: {
    fontSize: 16,
    marginBottom: 10,
  },
  linkText: {
    color: 'blue',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  pokemonInfo: {
    marginTop: 20,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  infoText: {
    fontSize: 16,
    marginBottom: 5,
  },
  abilitiesList: {
    marginTop: 5,
  },
  abilityItem: {
    fontSize: 16,
  },
  typesList: {
    marginTop: 5,
  },
  typeItem: {
    fontSize: 16,
  },
  // Agrega más estilos según tus necesidades
});

export default Information;
