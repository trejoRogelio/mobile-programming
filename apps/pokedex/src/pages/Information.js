import { Button, Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import { Link, useParams } from 'react-router-native';
import { useEffect, useState } from 'react';
 
import { getPokemonById } from '../services/pokeapi';

function Information() {
    const [pokemon, setPokemon] = useState();
    const { pokemonid } = useParams();

    useEffect(() => {
        (async () => {
            try {
                const pokeInformation = await getPokemonById(pokemonid);
                setPokemon(pokeInformation);
            } catch (error) {
                console.error(error);
            } finally {
                console.log('end!!!');
            }
        })();
    }, []);

    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{
                    uri: 'https://cdn.wccftech.com/wp-content/uploads/2023/07/8216-pokemon-presents-8217-presentation-will-reveal-new-information-tomorrow-on-june-17-WEVctuQTeaI.jpg'
                }}
            />
            <Text style={styles.title}>Informacion chida</Text>
            <Text style={styles.text}>
                <Text style={styles.label}>ID:</Text> {pokemonid}
            </Text>
            
            <Text style={styles.text}>
                <Text style={styles.label}>Name:</Text> {pokemon?.name}
            </Text>
            <Text style={styles.text}>
                <Text style={styles.label}>Height:</Text> {pokemon?.height}
            </Text>
            <Text style={styles.text}>
                <Text style={styles.label}>Base experience:</Text> {pokemon?.base_experience}
            </Text>
            <Text style={styles.text}>
                <Text style={styles.label}>Move name:</Text> {pokemon?.moves[0]?.move?.name}
            </Text>
            <Text style={styles.text}>
                <Text style={styles.label}>Order:</Text> {pokemon?.order}
            </Text>
            <Text style={styles.text}>
                <Text style={styles.label}>Weight:</Text> {pokemon?.weight}
            </Text>
            <Text style={styles.text}>
                <Text style={styles.label}>Abilities:</Text> {pokemon?.abilities[0]?.ability?.name}
            </Text>
            <Text style={styles.text}>
                <Text style={styles.label}>Base experience:</Text> {pokemon?.base_experience}
            </Text>
            <Text style={styles.text}>
                <Text style={styles.label}>Stats:</Text> {pokemon?.stats[1]?.stat?.name}
            </Text>

            <Link to='/'>
                <Text style={styles.link}> Regresar </Text>
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        backgroundColor: '#F5F5F5',
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
        textAlign: 'left', 
    },
    text: {
        fontSize: 20,
        marginBottom: 5,
        color: '#555',
        textAlign: 'left', 
    },
    link: {
        color: '#1CFB01',
        fontSize: 20,
        marginTop: 20,
        textDecorationLine: 'underline',
        textAlign: 'left', 
    },
    label: {
        fontWeight: 'bold',
        color: '#007BFF',
    },
    image: {
        width: 250,
        height: 250,
        marginBottom: 20,
    },
});

export default Information;
