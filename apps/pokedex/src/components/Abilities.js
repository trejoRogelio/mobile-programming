import {
  StyleSheet,
  Button,
  Text,
  View,
  TouchableHighlight,
} from "react-native";
import { Link, useParams } from "react-router-native";
import { useEffect, useState } from "react";
import InfoPokemon from "../components/InfoPokemon";
import Icon from "react-native-vector-icons/Ionicons";
import ImageInfo from "../components/ImagesInfo";
// Services
import { getPokemonById } from "../services/pokeapi";

function Abilities({ pokeinformation }) {
  const [abilities, setAbilities] = useState([]);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // console.log(pokeinformation)
  }, []);

  return (
    <View style={styles.navbar}>
      <View style={styles.abilities}>
        <Text style={styles.navbarText}>Abilities: </Text>
        {pokeinformation.abilities.map((item, index) => (
          <View key={index}>
            <Text style={styles.navbarText} key={index}>
              {item.ability.name + "\n"}
            </Text>
          </View>
        ))}
        <Text style={styles.navbarText}>Stats: </Text>
        {/* {console.log(pokeinformation.stats[0].stat.name)} */}
        {pokeinformation.stats.map((item, index) => (
          <View key={index}>
            <View >
              <Text style={styles.navbarText} key={index}>
                Name: {item.stat.name + "\n"}
              </Text>
            </View>
            <View key={index}>
              <Text style={styles.navbarText} key={index}>
                Effort: {item.effort + "\n"}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    padding: 20,
    backgroundColor: "#FF0000",
  },
  navbarText: {
    color: "white",
    fontSize: 20,
    fontStyle: "italic",
    fontWeight: "bold",
  },
  infoText: {},
  abilities: {
    flexDirection: "column",
    alignItems: "center",
  },
});

export default Abilities;
