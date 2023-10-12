import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, Text, View } from 'react-native';
import { OnePokemonType } from '../../types/ListPokemon';
import axios from 'axios';
import { Pokemon } from '../../types/PokemonsId';
import { Link } from 'react-router-native';
async function fetchPokemonData(uri) {
  const response = await axios.get(uri);
  return response.data;
}

export const OnePokemon: React.FC<{ pokemon: OnePokemonType }> = ({
  pokemon,
}) => {
  const [pokemonData, setPokemonData] = useState<Pokemon>();
  useEffect(() => {
    fetchPokemonData(pokemon.url).then(data => {
      if (data) {
        setPokemonData(data);
      }
    });
  }, []);
  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#D9D9D9',
          marginTop: 20,
          borderRadius: 10,
        }}>
        <View style={{ marginTop: 10 }}>
          <Text style={{ color: 'red', fontWeight: 'bold' }}>
            {pokemon.name}
          </Text>
        </View>
        {pokemonData ? (
          <Link to={`/information/${pokemonData.id ? pokemonData.id : 1}`}>
            <Image
              style={{
                width: 100,
                height: 100,
                resizeMode: 'stretch',
              }}
              source={{ uri: pokemonData.sprites.front_default }}
            />
          </Link>
        ) : (
          <ActivityIndicator />
        )}
      </View>
    </>
  );
};
