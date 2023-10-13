import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { getPokemonById} from '../services/pokeapi'
import HButton from '../components/HButton'

import { Link } from 'react-router-native';


function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function RandomPokemonPage({ history }) {
  const [randomPokemon, setRandomPokemon] = useState([]);

  useEffect(() => {
    const randomNumbers = [];
    while (randomNumbers.length < 20) {
      const randomNum = getRandomNumber(1, 1017);
        randomNumbers.push(randomNum);
    }

    const randomPokemonData = randomNumbers.map(async (num) => {
      try {
        const data = await getPokemonById(num);
        return data;
      } catch (error) {
        console.error(`Error al obtener el Pokémon con el número ${num}`, error);
        return null;
      }
    });

    Promise.all(randomPokemonData).then((pokemonData) => {
      setRandomPokemon(pokemonData.filter((data) => data !== null));
    });
  }, []);

  return (
    <ScrollView>
    <View style={{flexDirection: 'column', alignItems: 'center',}}>
      <Text>Random Pokemons</Text>
      {randomPokemon.map((pokemon, index) => (
        <View>
            <Text key={index}>{pokemon.name}</Text>
            <Link to={`/information/${pokemon.id}`}>
                <Image
                    style={{ height: 250, width: 250 }}
                    source={
                        {
                            uri: pokemon?.sprites?.front_default
                        }
                    }
                />
            </Link>
        </View>
      ))}
      <HButton/>
    </View>
    </ScrollView>
  );
}

export default RandomPokemonPage;