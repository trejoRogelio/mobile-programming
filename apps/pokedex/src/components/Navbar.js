import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

function Navbar() {
<<<<<<< HEAD
  return (
    <View style={styles.navbar}>
      <Text style={styles.navbarText}>PokéDex ISC</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    marginTop: Constants.statusBarHeight,
    padding: 20,
    backgroundColor: '#E53939',
  },
  navbarText: {
    color: 'white',
    fontSize: 30,
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
=======
    return (
        <View style={styles.navbar}>
            <Text style={styles.navbarText}>PokéDex ISC</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    navbar: {
        marginTop: Constants.statusBarHeight,
        padding: 20,
        backgroundColor: '#E53939'
    },
    navbarText: {
        color: 'white',
        fontSize: 30,
        fontStyle: 'italic',
        fontWeight: 'bold'
    }
>>>>>>> 9eba55971e178c6907ee037230a7f9156f75cec9
});

export default Navbar;
