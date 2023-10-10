import { Button, StyleSheet, Text, View, Image } from 'react-native';
import { Link } from 'react-router-native';
import { styles } from '../../App';


// Services
import { getPokemonByName } from '../services/pokeapi';
import { useState } from 'react';

function Home() {
  return (
    <View style={styles.container}>
      <Text>Home Page</Text>
      <Image
        style={styles.img}
        source={require('../../assets/images/pokebola.png')}
      />
      <Link to='/information'>
        <Text>Go to information page</Text>
      </Link>
    </View>
  );
}

export default Home;
