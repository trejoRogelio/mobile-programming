<<<<<<< HEAD
import { Button, StyleSheet, Text, View, Image } from 'react-native';
import { Link } from 'react-router-native';

function Home() {
  return (
    <View style={styles.main}>
      <Image
        style={styles.img}
        source={require('../../assets/images/pokebola.png')}
      />
      <Text>Home Page</Text>
      <Link to='/information'>
        <Text>Go to information page</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flexDirection: 'column',
    alignContent: 'center',
  },
  img: {
    width: 200,
    height: 200,
  },
=======
import { Button, StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { Link } from 'react-router-native';

function Home() {
    return (
        <View>
            <View style={styles.main}>
                <Image source={require('../../assets/pokebola.png')} />
                <View style={styles.inputs}>
                    <TextInput style={{ borderWidth: 1 }} placeholder='Search a Pokemon!' />
                    <Button title='Search' />
                </View>
                <View>
                    <Text>Filters!!!</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    inputs: {
        width: 400,
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
>>>>>>> 9eba55971e178c6907ee037230a7f9156f75cec9
});

export default Home;
