// Dependencias
import { StyleSheet, View } from 'react-native';
import { NativeRouter, Routes, Route } from 'react-router-native';

// Components
import Home from './src/pages/Home';
import Information from './src/pages/Information';
import Navbar from './src/components/Navbar';

const DefinedRoutes = () => {
  return (
    <View style={styles.main_container}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/information' element={<Information />} />
      </Routes>
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.main}>
      <NativeRouter>
        <Navbar />
        <DefinedRoutes />
      </NativeRouter>
    </View>
  );
}

export const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  main_container: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 20,
  },
  container: {
    alignItems: 'center',
  },
  pokemondata_container: {
    width: 250,
    margin: 5,
    padding: 10,
    backgroundColor: '#D9D9D9',
    borderRadius: 20,
  },
  img: {
    margin: 10,
    width: 200,
    height: 200,
  },
  input_pokesearch: {
    padding: 5,
    width: 250,
    marginVertical: 10,
    borderColor: '#CB6D6D',
    borderWidth: 2,
  },
  btn_custom: {
    margin: 7,
    padding: 15,
    fontSize: 20,
    backgroundColor: 'rgba(74,144,226,1)',
    borderWidth: 0,
    borderColor: 'rgba(93,224,224,1)',
    borderRadius: 11,
    textAlign: 'center',
  },
  txt_title: {
    color: '#121212',
    fontSize: 25,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  txt_white: {
    color: '#ffffff',
  },
  txt_bold: {
    fontWeight: 'bold',
  },
});
