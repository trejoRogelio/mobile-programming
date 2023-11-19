import React, { useState, useEffect } from 'react';
import { View, Text, Button, TouchableOpacity, ScrollView } from 'react-native';
import PokemonListByType from '../components/pokemonlist';
import { Link, useParams } from 'react-router-native';

const ListaPokemon = () => {
  const [selectedType, setSelectedType] = useState(null);

  const pokemonTypes = ['normal', 'electric', 'fire', 'bug'];

  const handleTypeClick = (type) => {
    setSelectedType(type);
  };

  return (
    <ScrollView>
      <View>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontSize: 23, fontWeight: 'bold' }}>Selecciona un tipo de Pokémon:</Text>
        </View>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          {pokemonTypes.map((type) => (
            <TouchableOpacity key={type} style={{ width: '48%' }}>
              <Button title={type} onPress={() => handleTypeClick(type)} />
            </TouchableOpacity>
          ))}
          <Link to='/'>
            <Text>Go To Home!!!</Text>
          </Link>
        </View>
      </View>
      {selectedType && <PokemonListByType type={selectedType} />}
    </ScrollView>
  );
};

export default Lista;