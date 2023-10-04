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
});

export default Home;
