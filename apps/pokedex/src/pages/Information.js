import React, { useEffect, useState } from 'react';
import { Text, View, Image, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import { Link, useParams } from 'react-router-native';
import { getPokemonById } from '../services/pokeapi';
import GameVersion from '../components/GameVersion';
import Moves from '../components/Moves';


function Information() {
    const [pokemonInfo, setPokemonInfo] = useState(null);

    const { pokemonid } = useParams();

    useEffect(() => {
        (async () => {
            try {
                const pokeInformation = await getPokemonById(pokemonid);
                setPokemonInfo(pokeInformation);
            } catch (error) {
                console.error(error);
            }
        })();
    }, [pokemonid]);

    return (
        <ImageBackground
            source={require('../../assets/poke.jpg')} 
            style={styles.container}
        >
            <View style={styles.header}>
                <Text style={[styles.title, styles.textColor]}>Pokédex</Text>
                <Image
                    source={{ uri: pokemonInfo?.shinySpriteURL}}
                    style={styles.pokemonImage}
                />
            </View>
            {pokemonInfo && (
                <View style={styles.infoContainer}>
                    <Text style={styles.textColor}>
                        <Text style={styles.bold}>Name:</Text> {pokemonInfo.name}
                    </Text>
                    <Text style={styles.textColor}>
                        <Text style={styles.bold}>Type:</Text> {pokemonInfo.type}
                    </Text>
                    <Moves moves={pokemonInfo.moves} />
                    <GameVersion gameVersions={pokemonInfo.gameVersions} />
                    <Text style={[styles.stats, styles.textColor]}>Stats:</Text>
                    <View style={styles.statsTable}>
                        <View style={styles.statsRow}>
                            <Text style={styles.statsLabel}>HP:</Text>
                            <Text style={styles.statsValue}>{pokemonInfo.stats.hp}</Text>
                        </View>
                        <View style={styles.statsRow}>
                            <Text style={styles.statsLabel}>Attack:</Text>
                            <Text style={styles.statsValue}>{pokemonInfo.stats.attack}</Text>
                        </View>
                        <View style={styles.statsRow}>
                            <Text style={styles.statsLabel}>Defense:</Text>
                            <Text style={styles.statsValue}>{pokemonInfo.stats.defense}</Text>
                        </View>
                        <View style={styles.statsRow}>
                            <Text style={styles.statsLabel}>Special Attack:</Text>
                            <Text style={styles.statsValue}>{pokemonInfo.stats['special-attack']}</Text>
                        </View>
                        <View style={styles.statsRow}>
                            <Text style={styles.statsLabel}>Special Defense:</Text>
                            <Text style={styles.statsValue}>{pokemonInfo.stats['special-defense']}</Text>
                        </View>
                        <View style={styles.statsRow}>
                            <Text style={styles.statsLabel}>Speed:</Text>
                            <Text style={styles.statsValue}>{pokemonInfo.stats.speed}</Text>
                        </View>
                    </View>
                </View>
            )}
            
            <TouchableOpacity style={styles.goBackButton}>
                <Link to={`/`} replace={true}>
                    <Text style={styles.goBackText}>Go Back</Text>
                </Link>
            </TouchableOpacity>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        alignItems: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    pokemonImage: {
        width: 200,
        height: 150,
        marginTop: -20,
    },
    infoContainer: {
        alignItems: 'center',
    },
    stats: {
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 5,
    },
    statsTable: {
        marginTop: 1,
    },
    statsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 1,
    },
    statsLabel: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'black',
    },
    statsValue: {
        fontSize: 12,
        color: 'black',
    },
    goBackButton: {
        backgroundColor: 'transparent',
        paddingVertical: 21,
        paddingHorizontal: 140,
        borderRadius: 5,
        marginTop: 45,
    },
    goBackText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
    },
    textColor: {
        color: 'black',
    },
    bold: {
        fontWeight: 'bold',
    },
});

export default Information;
