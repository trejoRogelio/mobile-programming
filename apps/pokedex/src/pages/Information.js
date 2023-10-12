import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { Link, useParams } from 'react-router-native';
import PokemonInfo from '../components/PokemonInfo';

// Services
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
      {pokemon && <PokemonInfo pokemon={pokemon} />}

      <Link to='/'>
        <Text>Go To Home!!!</Text>
      </Link>
    </View>
  );
}

export default Information;
