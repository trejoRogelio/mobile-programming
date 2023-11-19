import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ActivityIndicator,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Link } from "react-router-native";

// Services
import { getPokemonByName } from "../services/pokeapi";
import { useState } from "react";

function Home() {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemon, setPokemon] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handdleChangeText = (namePokemon) => setPokemonName(namePokemon);

  const handdlePress = async () => {
    setLoading(true);
    try {
      const pokeInformation = await getPokemonByName(pokemonName);
      // console.log(pokeInformation);
      setPokemon(pokeInformation);
    } catch (error) {
      alert("Oh no!! \nThere isn't any Pokemon match");
      setError(!!error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView behavior="height" keyboardVerticalOffset={600}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.main}>
          {loading && (
            <ActivityIndicator
              style={{ width: "auto", height: 250 }}
              size="large"
              color="#E53939"
            />
          )}
          {!loading && pokemon && (
            <Link to={`/information/${pokemon.id}`}>
              <Image
                style={{ height: 250, width: 250 }}
                source={{
                  uri: pokemon?.sprites?.front_default,
                }}
              />
            </Link>
          )}
          {(error || (!pokemon && !loading)) && (
            <Image
              style={{ height: 250 }}
              source={require("../../assets/pokebola.png")}
            />
          )}
          <View style={styles.inputs}>
            <TextInput
              style={{ marginBottom: 10 }}
              onChangeText={handdleChangeText}
              placeholder="Search a Pokemon!"
            />

            <Button onPress={handdlePress} title="Search" />
          </View>
          <View>
            <Text>Filters!!!</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  main: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
  },
  inputs: {
    width: 400,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default Home;
