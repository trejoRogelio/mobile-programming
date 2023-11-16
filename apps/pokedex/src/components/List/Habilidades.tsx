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
import { AbilityComponent } from './Hability';

export const Habilidades = ({ abilities }) => {
  return (
    <SafeAreaView
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
      }}>
      <View
        style={{
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <FlatList
          data={abilities}
          renderItem={({ item }) => <AbilityComponent abilities={item} />}
          keyExtractor={item => item.name}
        />
      </View>
    </SafeAreaView>
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
