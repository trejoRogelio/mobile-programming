import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, Image } from 'react-native';

// import Constants from 'expo-constants';


function InfoPokemon({ pokeinformation }) {
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      // console.log("este es el pokemón", pokeinformation);
    }, []);
  
    return (
      <View style={styles.navbar}>
        
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            style={{ height: 250, width: 180 }}
            source={{
              uri: pokeinformation?.sprites?.front_default,
            }}
          />
          <View style={{ marginLeft: 20 }}>
            <Text style={styles.navbarText}>Pokemon id: {pokeinformation.id}</Text>
            <Text style={styles.navbarText}>{pokeinformation.name.toUpperCase()}</Text>
            <Text style={styles.navbarText} >Weight: {pokeinformation.weight}</Text>
            <Text style={styles.navbarText} >Height: {pokeinformation.height}</Text>
            <Text style={styles.navbarText} >Order: {pokeinformation.order}</Text>
            
          </View>
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
    infoText:{

    }
  });
  

export default InfoPokemon;