import React, { useState, useEffect } from 'react';
import { View, ScrollView, Image, Text, TouchableOpacity } from 'react-native';
import { getPokemonListByType } from '../services/pokeapi'; 

const PokemonListByType = ({ type }) => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemonsByType = async () => {
      try {
        const pokemonsOfType = await getPokemonListByType(type);
        setPokemons(pokemonsOfType);
      } catch (error) {
        console.error('Error fetching Pokémon data', error);
      }
    };

    fetchPokemonsByType();
  }, [type]);

  return (
    <ScrollView>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {pokemons.map((item) => (
          <View key={item.name} style={{ width: '50%', padding: 8 }}>
            <TouchableOpacity>
              <Image
                style={{ width: '100%', height: 100 }}
                source={{ uri: item?.sprites?.front_default }}
              />
              <Text>{item.name}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
                    <Link to='/lista'>
                    <Text>Ver lista</Text>
                </Link>
            </View>
  );
};

export default PokemonListByType;
