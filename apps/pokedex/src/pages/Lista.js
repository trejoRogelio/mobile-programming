import {
    StyleSheet,
    Button,
    Text,
    View,
    TouchableHighlight,
    SafeAreaView,
    FlatList,
  } from "react-native";
  import { Link, useParams } from "react-router-native";
  import { useEffect, useState } from "react";
  import InfoPokemon from "../components/InfoPokemon";
  import Icon from "react-native-vector-icons/Ionicons";
  import ImageInfo from "../components/ImagesInfo";
  import Abilities from "../components/Abilities";
  import LinkHome from "../components/LinkHome";
  // Services
  import { getPokemonById } from "../services/pokeapi";
  
  function Lista() {
    const [pokemon, setPokemon] = useState();
    const [isLoading, setIsLoading] = useState(true);
  
    const { pokemonid } = useParams();
    useEffect(() => {
      (async () => {
        try {
          const pokemones = await get20Pokemon();
          setPokemon(pokeInformation);
          setIsLoading(false);
        } catch (error) {
          console.error(error);
        } finally {
          // console.log('end!!!');
        }
      })();
    }, []);
  
    if (isLoading) {
      return <Text>Loading...</Text>;
    }
  
    const data = [pokemon];
  
    return (
      <SafeAreaView>
        <FlatList
        style={{paddingBottom:"100", marginBottom:"100" }}
          data={data}
          renderItem={({ item }) => (
            <View style={styles.info}>
              <InfoPokemon pokeinformation={item} />
  
              <ImageInfo pokeinformation={item} />
              <Abilities pokeinformation={item} />
              <LinkHome />
              
            </View  >
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </SafeAreaView>
    );
  }
  const styles = StyleSheet.create({
    info: {
      paddingBottom: 150,
      backgroundColor: "#FF0000",
    },
  });
  
  export default Lista;
  