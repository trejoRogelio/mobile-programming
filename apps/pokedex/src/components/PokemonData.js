import React from 'react';
import { Text, View, StyleSheet, Image, } from 'react-native';

const PokemonData = ({ pokemon }) => {
    if (!pokemon) {
        return null;
    }

    return (
        <View>
            <Image
                style={{ height: 200, width: 200 }}
                source={
                    {
                        uri: pokemon?.sprites?.other?.home?.front_default
                    }
                }
            />

            <Text style={styles.stats}>Name: </Text><Text>{pokemon.name}</Text>
            <Text style={styles.stats}>Height:  </Text><Text>{pokemon.height}</Text>
            <Text style={styles.stats}>Weight: </Text><Text> {pokemon.weight}</Text>
            <Text style={styles.stats}>Abilities:  </Text><Text>{pokemon.abilities.map(ability => ability.ability.name).join(', ')}</Text>
            <Text style={styles.stats}>Types:  </Text><Text>{pokemon.types.map(type => type.type.name).join(', ')}</Text>
            <Text style={styles.stats}>Base Experience:  </Text><Text>{pokemon.base_experience}</Text>
            <Text style={styles.stats}>Stats: </Text><Text></Text>
            {pokemon.stats.map(stat => (
                <View key={stat.stat.name}>
                    <Text style={styles.stats}>{stat.stat.name}: </Text><Text> {stat.base_stat}</Text>
                </View>
            ))}

            <View>
                <Text style={styles.stats}>Shiny: </Text>
                <Image
                    style={{ height: 150, width: 150 }}
                    source={
                        {
                            uri: pokemon?.sprites?.other?.home?.front_shiny
                        }
                    }
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    stats: {
        fontWeight: 'bold'
    }
});

export default PokemonData;