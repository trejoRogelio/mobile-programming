import { Text, View, Image } from 'react-native';
import { Link } from 'react-router-native';
import { styles } from '../../App';

// Services

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt_title}>Pokedex home page</Text>
      <Image
        style={styles.img}
        source={require('../../assets/images/pokebola.png')}
      />
      <Link to='/information' style={styles.btn_custom}>
        <Text style={styles.txt_white}>Go to information page</Text>
      </Link>
    </View>
  );
};

export default Home;
