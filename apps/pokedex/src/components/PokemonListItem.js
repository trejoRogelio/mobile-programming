import React from 'react';
import { View, Text, Image } from 'react-native';
import { Link } from 'react-router-native';

const PokemonListItem = ({ item }) => {
    return (
        <Link key={item.name} to={`/information/${item.url.split('/')[6]}`} replace={true}>
            <View style={styles.listItem}>
                <Image
                    source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.url.split('/')[6]}.png` }}
                    style={styles.listImage}
                />
                <Text>{item.name}</Text>
            </View>
        </Link>
    );
};

const styles = {
    listItem: {
        margin: 10,
    },
    listImage: {
        width: 100,
        height: 100,
    },
};

export default PokemonListItem;
