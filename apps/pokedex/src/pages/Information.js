import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Link, useParams } from 'react-router-native';

function Information() {
    const [pokemon, setPokemon] = useState(null);
    const { pokemonid } = useParams();

    useEffect(() => {

        const fetchData = async () => {
            try {
                const pokeInformation = JSON.parse(decodeURIComponent(pokemonid));
                setPokemon(pokeInformation);
            } catch (error) {
                console.error('Error fetching Pokémon data:', error);
            }
        };

        fetchData();
    }, [pokemonid]);

    return (
        <ScrollView>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
                Pokemon Information
            </Text>
            {pokemon && (
                <View>
                    <Text>Name: {pokemon.name}</Text>
                    <Text>Height: {pokemon.height}</Text>
                    <Text>Weight: {pokemon.weight}</Text>
                    <Text>Base Experience: {pokemon.base_experience}</Text>
                    <Text>Abilities:</Text>
                    <ul>
                        {pokemon.abilities.map((ability, index) => (
                            <li key={index}>{ability.ability.name}</li>
                        ))}
                    </ul>
                    <Text>Types:</Text>
                    <ul>
                        {pokemon.types.map((type, index) => (
                            <li key={index}>{type.type.name}</li>
                        ))}
                    </ul>
                    <Text>Stats:</Text>
                    <ul>
                        {pokemon.stats.map((stat, index) => (
                            <li key={index}>{stat.stat.name}: {stat.base_stat}</li>
                        ))}
                    </ul>
                </View>
            )}
            <Link to='/'>
                <Text>Go To Home</Text>
            </Link>
        </ScrollView>
    );
}

export default Information;
