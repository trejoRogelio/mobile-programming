import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { useParams, Link } from 'react-router-native';
import { getPokemonById } from '../services/pokeapi';

function Information() {
  const [pokemon, setPokemon] = useState(null);
  const { pokemonid } = useParams();

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
    <View>
      <Text></Text>
      {pokemon && (
        <View>
          <Text>Name: {pokemon.name}</Text>
          <Text>Height: {pokemon.height}</Text>
          <Text>Weight: {pokemon.weight}</Text>

          {pokemon.types && (
            <Text>Types: {pokemon.types.map((type) => type.type.name).join(', ')}</Text>
          )}
          {pokemon.abilities && (
            <Text>Abilities: {pokemon.abilities.map((ability) => ability.ability.name).join(', ')}</Text>
          )}

          {/* Additional attributes */}
          <Text>Base Experience: {pokemon.base_experience}</Text>
          <Text>Order: {pokemon.order}</Text>
          <Text>Is Default: {pokemon.is_default.toString()}</Text>
          <Text>Species URL: {pokemon.species.url}</Text>

          {/* Add more attributes based on the API response */}
          {pokemon.stats && (
            <Text>HP: {pokemon.stats.find(stat => stat.stat.name === 'hp').base_stat}</Text>
            // Add more stats or attributes as needed
          )}

        </View>
      )}

      <Link to='/'>
        <Text>Regresar a la pagina principal</Text>
      </Link>
    </View>
  );
}

export default Information;
