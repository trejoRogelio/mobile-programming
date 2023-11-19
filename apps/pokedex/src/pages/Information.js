import { Button, Text, View, } from 'react-native';
import { Link, useParams } from 'react-router-native';
import { useEffect, useState } from 'react';
import PokemonDetails from '../components/PokemonDetails';
import Aesthetic from '../components/Aesthetic';

import { getPokemonById } from '../services/pokeapi';

function Information() {
    const [pokemon, setPokemon] = useState();

    const { pokemonid } = useParams();
    const [abilities, setAbilities] = useState([]);
    const [moves, setMoves] = useState([]);

    useEffect(() => {

        (async () => {
            try {
                const pokeInformation = await getPokemonById(pokemonid);
                setPokemon(pokeInformation);
                setAbilities(pokeInformation.abilities);
                setMoves(pokeInformation.moves);
            } catch (error) {
                console.error(error);
            } finally {
                console.log('end!!!');
            }
        })();

    }, []);

    return (
        <View>
            <Text style={Aesthetic.title} >Pokemon Stats</Text>
            {pokemon && (
                    <PokemonDetails pokemon={pokemon} abilities={abilities} moves={moves} />
                )}
            <Link style={Aesthetic.boton} to='/' >
                <Text style={Aesthetic.textoBoton}>Go To Home</Text>
            </Link>
        </View>
    );
}

export default Information;