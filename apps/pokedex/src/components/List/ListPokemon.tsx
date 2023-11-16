import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useEffect, useState } from 'react';
import { getPokemonList } from '../../services/pokeapi';
import { PokemonList } from '../../types/ListPokemon';
import { OnePokemon } from './OnePokemon';

export const ListPokemon = () => {
  const [pokemonList, setPokemonList] = useState<PokemonList>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    getPokemonList()
      .then(data => {
        if (data) {
          console.log(data);
          setPokemonList(data);
        }
      })
      .catch(er => {
        console.log(er);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
      }}>
      {isLoading ? (
        <View style={{ justifyContent: 'center' }}>
          <ActivityIndicator size='large' />
        </View>
      ) : (
        <View
          style={{
            width: '100%',
            marginVertical: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <FlatList
            data={pokemonList.results}
            renderItem={({ item }) => <OnePokemon pokemon={item} />}
            keyExtractor={item => item.name}
            ListHeaderComponent={
              <Text style={styles.title}>Pokemon Disponibles</Text>
            }
            ListFooterComponent={<View style={{ marginBottom: 50 }}></View>}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3c6e71',
    borderRadius: 20,
  },
  item: {
    backgroundColor: '#3c6e71',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 23,
  },
});
