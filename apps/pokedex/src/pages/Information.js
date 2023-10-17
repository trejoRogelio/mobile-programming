import { Button, Text, View } from 'react-native';
import { Link, useParams } from 'react-router-native';
import { useEffect, useState } from 'react';

// Services
import { getPokemonById } from '../services/pokeapi';

function Information() {
  const [pokemon, setPokemon] = useState();
  const { pokemonid } = useParams();

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const pokeInformation = await getPokemonById(pokemonid);
        setPokemon(pokeInformation);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPokemonDetails();
  }, [pokemonid]);

  return (
    <View>
      <Text>Information Page</Text>
      <Text>{pokemonid}</Text>
      {pokemon && (
        <View>
          <Text>Name: {pokemon.name}</Text>
          <Text>Height: {pokemon.height}</Text>
          <Text>Weight: {pokemon.weight}</Text>
          <Text>Base Experience: {pokemon.base_experience}</Text>
          <Text>Abilities:</Text>
          <View>
            {pokemon.abilities.map((ability, index) => (
              <Text key={index}>{ability.ability.name}</Text>
            ))}
          </View>
          <Text>Types:</Text>
          <View>
            {pokemon.types.map((type, index) => (
              <Text key={index}>{type.type.name}</Text>
            ))}
          </View>
          <Text>Stats:</Text>
          <View>
            {pokemon.stats.map((stat, index) => (
              <Text key={index}>{stat.stat.name}: {stat.base_stat}</Text>
            ))}
          </View>
          <Text>Moves:</Text>
          <View>
            {pokemon.moves.slice(0, 11).map((move, index) => (
              <Text key={index}>{move.move.name}</Text>
            ))}
          </View>
        </View>
      )}
      <Link to='/'>
        <Text>Go To Home!!!</Text>
      </Link>
    </View>
  );
}

export default Information;