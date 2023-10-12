import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, Text, View } from 'react-native';
import { OnePokemonType } from '../../types/ListPokemon';
import axios from 'axios';
import { Ability, Move, Pokemon } from '../../types/PokemonsId';

export const MovementComponent: React.FC<{ movement: Move }> = ({
  movement,
}) => {
  return (
    <>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#D9D9D9',
          borderRadius: 10,
          marginTop: 3,
        }}>
        <View>
          <Text style={{ color: 'green', fontWeight: 'bold' }}>
            {movement.move.name}
          </Text>
        </View>
      </View>
    </>
  );
};
