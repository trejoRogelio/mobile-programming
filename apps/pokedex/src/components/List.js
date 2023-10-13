import { Button, FlatList, StyleSheet, Text, View, Image, TextInput, ActivityIndicator } from 'react-native';
import { useState } from 'react';

import { getTwentyPokemon } from '../services/pokeapi';

function List() {
    const [pokemon_list, setPokemonList] = useState();
    const [loading, setLoading] = useState(false);

    const handdlePress = async () => {
        setLoading(true);
        try {
            const pokeList = await getTwentyPokemon();
            setPokemonList(pokeList);
        } catch (error) {
            setError(!!error);
        } finally {
            setLoading(false);
        }
    };

    const renderItem = ({ item }) => (
        <View>
            <Text>{item.name}</Text>
        </View>
    );

    return (
        <View >
            <Button
                onPress={handdlePress}
                title='Mostrar Lista'
            />
            <FlatList
                data={pokemon_list}
                keyExtractor={item => item.id}
                renderItem={renderItem}
            />
        </View>
    );
}

export default List;