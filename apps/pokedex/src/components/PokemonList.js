import { lazy, useEffect, useState } from 'react';
import { Text, View, FlatList, StyleSheet, ToastAndroid, ActivityIndicator} from 'react-native';
import { getPokemonByName, getPokemonList } from '../services/pokeapi';
import { PokemonListItem } from './PokemonListItem';
export const PokemonList = () => {

    const [pokemonList, setPokemonList] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    useEffect(() => {
        getList();
    }, []);

    const getList = async () => {
        console.log('getting list');
        setLoading(true);
        try {
            const list = await getPokemonList(20,0);
            // console.log(list);
            if(!list) {
                ToastAndroid.showWithGravityAndOffset(
                    'Error',
                    ToastAndroid.SHORT,
                    ToastAndroid.BOTTOM,
                    0,
                    210
                );
                return;
            }
            
            const result = await (await Promise.all( list.results.map(async (poke)=> 
                getPokemonByName(poke.name)  
            ))).map((p)=> {
                return({name: p.name, img: p.sprites.front_default, id: p.id});
            });
            setPokemonList(result);
            setError((false));
        } catch (error) {
            setError(true);
        } finally {
            setLoading(false);
        }
      
    };
    
    return (
        <View>
            {loading && (
                <ActivityIndicator style={{ width: 'auto', height: 250 }} size='large' color='#E53939' />
            )}
            {error && !loading && (
                <View>
                    <Text>ERROR</Text>
                </View>
            )}
            {pokemonList && pokemonList.length >0 && !loading &&(<FlatList  
                scrollEnabled={false}
                data={pokemonList}
                ListHeaderComponent={
                    <View>
                        <Text style={styles.normalText}>
                            Pokemon list
                        </Text>
                    </View>}
                renderItem={({item}) => (
                    <View>
                        <PokemonListItem pokemon={item}/>
                    </View>
                )}/>)}
        </View>
    );
};

const styles = StyleSheet.create({
    results: {
        padding: 5,
        marginVertical: 5,
        marginHorizontal: 40,
        backgroundColor: '#F1F7ED',
        borderRadius: 15,
        shadowColor: '#52006A',
        elevation: 10
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
        fontSize: 12,
        paddingLeft: 6,
    },
    normalText: {
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: 14,
    },
    description: {
        padding: 10,
        margin: 10,
    }
});
