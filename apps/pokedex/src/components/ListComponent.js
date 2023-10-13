import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

function ListItem({ pokemon, onPress }) {
  return (
    <TouchableOpacity style={styles.listItem} onPress={() => onPress(pokemon)}>
      <Text style={styles.listItemText}>{pokemon.name}</Text>
    </TouchableOpacity>
  );
}

function ListComponent({ data, onItemClick }) {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ListItem pokemon={item} onPress={onItemClick} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    padding: 10,
  },
  listItem: {
    backgroundColor: '#FFF',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  listItemText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ListComponent;
