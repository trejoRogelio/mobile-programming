import { Text, View, StyleSheet, Image, ToastAndroid, ScrollView, SafeAreaView, ActivityIndicator} from 'react-native';
import { useParams } from 'react-router-native';
import { useEffect, useState } from 'react';

// Services 
import { getPokemonById } from '../services/pokeapi';
import GoBackBtn from '../components/GoBackBtn';
import { Abilities } from '../components/Abilities';
import { Stats } from '../components/Stats';
import { Movements } from '../components/Movements';

function Information() {
    const [pokemon, setPokemon] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const { pokemonid } = useParams();
    const showTypes = () => {
        const types = pokemon.types.map((t, key)=> {
            console.log(t);
            return (
                <View key={key}>
                    <Text key={`type-${key}`} style={styles.secondaryText}>{t.type.name} </Text>
                </View>
            );
        });
        return types;
    };
    const getTypes = () => {
        let types = '';
        const typeArray = pokemon.types.map((t)=> {
            return t.type.name;
        });
        types = typeArray.join('-');
        return types;
    };

    useEffect(() => {
        // Manera de Hacelo con promesas
        // getPokemonById(pokemonid)
        //     .then((pokeInofrmation) => {
        //         console.log(pokeInofrmation);
        //     })
        //     .catch((error) => {
        //     })
        //     .finally(() => {

        //     });

        // Async/Await -> Funcion 
        // const fn = async () => {
        //     const pokeInformation = await getPokemonById(pokemonid);

        //     console.log(pokeInformation);
        // };
        // fn();

        // Async/Await -> IEFI
        (async () => {
            setLoading(true);
            try {
                const pokeInformation = await getPokemonById(pokemonid);
                if(!pokeInformation) {
                    throw new Error('error');
                }
                setPokemon(JSON.parse(JSON.stringify(pokeInformation)));
            } catch (error) {
                ToastAndroid.showWithGravityAndOffset(
                    'Error',
                    ToastAndroid.SHORT,
                    ToastAndroid.BOTTOM,
                    0,
                    210
                );
                setError(true);
                setPokemon(null);
            } finally {
                setLoading(false);
                console.log('end!!!');
            }
        })();

    }, [pokemonid]);

    return (
        <SafeAreaView>

            <ScrollView>
                <GoBackBtn/>
                {loading && (
                    <ActivityIndicator style={{ width: 'auto', height: 250 }} size='large' color='#E53939' />
                )}
                {error && !loading && (
                    <View>
                        <Text>ERROR</Text>
                    </View>
                )}
                { pokemon && pokemon!== '' && !loading && <View style={styles.mainView}>
                    <View style={styles.title}>
                        <Text style={styles.mainText}>{`${pokemon.name.toUpperCase()} No° ${pokemonid}`}</Text>
                    </View>
                    <View style={styles.imageContainer}>
                        <Image
                            style={styles.image}
                            source={
                                {
                                    uri: pokemon?.sprites?.front_default
                                }
                            }
                        />
                    </View>
                    <View style={styles.results}>
                        <Text style={styles.normalText}>
                            {getTypes()} 
                        </Text> 
                    </View>
                    <View style={styles.description}>
                        <Text>
                            {`${pokemon.name} is a ${getTypes()} type pokemon that weights ${pokemon.weight}00g and is ${pokemon.height}0cm tall`}
                        </Text>
                    </View>
                    <Abilities abilitiesList={pokemon.abilities}/>
                    <View style={styles.columnContainer}>
                        { pokemon && pokemon.stats && <Stats pokemonStats={pokemon.stats}/>}
                        { pokemon && pokemon.moves && <Movements pokemonMoves={pokemon.moves}/>}
                    </View>
                </View>}
               
            </ScrollView>
           
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    title: {
        padding: 10,
        marginVertical: 5,
    },
    columnContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding:10,
        margin: 10,
        backgroundColor: '#F1F7ED',
        borderRadius: 15,
        shadowColor: '#52006A',
        elevation: 10,
        marginHorizontal: 20,
    },
    mainView: {
        margin: 10,
    },
    backBtn: {
        margin: 10,
        borderRadius: 50,
        borderColor: '#00000'
    },
    results: {
        padding: 5,
        marginVertical: 5,
        marginHorizontal: 60,
        backgroundColor: '#F1F7ED',
        borderRadius: 15,
        shadowColor: '#52006A',
        elevation: 10
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 20,
        alignContent: 'center',
    },
    imageContainer: {
        padding: 'auto',
        alignItems: 'center',
    },
    mainText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize:20
    },
    secondaryText: {
        textAlign: 'center',
        fontSize: 18,
        marginBottom: 10,
    },
    smallText: {
        fontSize: 10,
    },
    normalText: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold'
    },
    description: {
        padding: 10,
        margin: 10,
    }
});
  
export default Information;