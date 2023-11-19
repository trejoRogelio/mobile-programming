import { Button, Text, View, } from 'react-native';
import { Link, useParams, } from 'react-router-native';
import { useEffect, useState } from 'react';
import PokeInfo from '../components/PokeInfo';
import { StyleSheet } from 'react-native';

// Services 
import { getPokemonById } from '../services/pokeapi';
import { ScrollView } from 'react-native';

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
        <ScrollView style={styles.container}>
            
          

            <Link to='/'>
                <Text  style={styles.linkText}> Go To Home!!!</Text>
            </Link>
            <PokeInfo pokemon={pokemon} />
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e5e5e5',
    },
    linkText:{
        color:'#fff',
        padding:10,
        backgroundColor:'#000',
        marginTop:20,
        borderRadius:10,
        marginHorizontal:100,
        textAlign:'center'
    },
});
export default Information;