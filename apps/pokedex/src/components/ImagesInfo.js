import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ActivityIndicator, Image } from "react-native";
import Carousel from 'react-native-snap-carousel';

// import Constants from 'expo-constants';

function ImageInfo({ pokeinformation }) {
  const [loading, setLoading] = useState(true);
  const renderImage = ({ item }) => (
    <Image
      style={{ height: 250, width: 180 }}
      source={{
        uri: item,
      }}
    />
  );
  return (
    <View style={styles.navbar}>
      
        <Carousel
          data={[
            pokeinformation?.sprites?.front_default,
            pokeinformation?.sprites?.back_default,
            pokeinformation?.sprites?.front_shiny,
            // pokeinformation?.sprites?.front_female,
            // pokeinformation?.sprites?.back_female,
            // pokeinformation?.sprites?.back_shiny_female,
            // Puedes agregar más imágenes según tus necesidades
          ]}
          renderItem={renderImage}
          sliderWidth={400}
          itemWidth={200}
          layout={"default"}
          loop={true}
        />
      
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
});

export default ImageInfo;
