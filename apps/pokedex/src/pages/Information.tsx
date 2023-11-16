import {
  ActivityIndicator,
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Link, useParams } from 'react-router-native';
import { useEffect, useState } from 'react';

// Services
import { getPokemonById } from '../services/pokeapi';
import { Pokemon } from '../types/PokemonsId';
import { Habilidades } from '../components/List/Habilidades';
import { Movimientos } from '../components/List/Movimientos';

function toTitleCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

function Information() {
  const [pokemon, setPokemon] = useState<Pokemon>();
  const { pokemonid } = useParams();
  useEffect(() => {
    (async () => {
      try {
        const pokeInformation = (await getPokemonById(pokemonid)) as Pokemon;
        console.log(pokeInformation);
        setPokemon(pokeInformation);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [pokemonid]);

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/pokedex.png')}>
        {!pokemon ? (
          <>
            <ActivityIndicator size='large' />
          </>
        ) : (
          <>
            <Link to='/'>
              <View
                style={{
                  backgroundColor: 'blue',
                  height: 20,
                  justifyContent: 'center',
                }}>
                <Text style={{ color: 'white' }}> Go To Home!!!</Text>
              </View>
            </Link>
            <View
              style={{
                ...styles.titleContainer,
                borderBottomColor: 'red',
                borderBottomWidth: 2,
              }}>
              <Text style={styles.titleText}>Information Page</Text>
            </View>
            <View
              style={{
                ...styles.titleContainer,
                backgroundColor: '#3C6E71',
                borderRadius: 10,
              }}>
              <Text style={{ ...styles.titleText, color: 'white' }}>
                {toTitleCase(pokemon.forms[0].name)}
              </Text>
            </View>
            <View style={styles.principalInfo}>
              <View>
                <Image
                  style={styles.stretch}
                  source={{ uri: pokemon.sprites.front_default }}
                />
              </View>
              <View style={styles.infoSection}>
                <Text style={styles.statsText}>Id:</Text>
                <Text style={styles.commonText}>No. {pokemon.id}</Text>
                <Text style={styles.statsText}>Altura:</Text>
                <Text style={styles.commonText}>{pokemon.height} mts.</Text>
                <Text style={styles.statsText}>Peso:</Text>
                <Text style={styles.commonText}>{pokemon.weight} Kgs.</Text>
                <Text style={styles.statsText}>Categoría:</Text>
                <>
                  <View style={styles.principalInfo}>
                    {pokemon.types.map((type_, index) => (
                      <View style={{ marginRight: 2 }}>
                        <Text key={index} style={styles.commonText}>
                          {type_.type.name}
                        </Text>
                      </View>
                    ))}
                  </View>
                </>
              </View>
            </View>
            {/* Abilities */}
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>Habilidades</Text>
            </View>
            <>
              <Habilidades abilities={pokemon.abilities} />
            </>
            {/* Movements */}
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>Movimientos</Text>
            </View>
            <>
              <Movimientos movements={pokemon.moves} />
            </>
          </>
        )}
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  titleContainer: {
    height: 30,
    alignItems: 'center',
    marginTop: 10,
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 1,
  },
  statsText: {
    fontSize: 19,
    fontWeight: 'bold',
    color: 'white',
  },
  commonText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  principalInfo: {
    flexDirection: 'row',
    marginBottom: 6,
    marginTop: 15,
  },
  stretch: {
    width: 200,
    height: 200,
    resizeMode: 'stretch',
  },
  infoSection: {
    backgroundColor: '#30a7d7',
    borderRadius: 10,
    width: 150,
    padding: 5,
  },
});

export default Information;
