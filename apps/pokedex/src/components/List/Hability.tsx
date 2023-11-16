import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, Text, View } from 'react-native';
import { OnePokemonType } from '../../types/ListPokemon';
import axios from 'axios';
import { Ability, Pokemon } from '../../types/PokemonsId';

export const AbilityComponent: React.FC<{ abilities: Ability }> = ({
  abilities,
}) => {
  return (
    <>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#D9D9D9',
          borderRadius: 10,
          marginTop:3,
          width:150
        }}>
        <View>
          <Text style={{ color: 'green', fontWeight: 'bold' }}>
            {abilities.ability.name}
          </Text>
        </View>
      </View>
    </>
  );
};
