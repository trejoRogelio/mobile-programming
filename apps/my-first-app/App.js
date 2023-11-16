import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { CityInput } from './src/components/wether/CityInput';
import { Logo } from './src/components/logo';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Logo />
      <Text style={styles.mainTitle}>Wether App</Text>
      <CityInput />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainTitle: {
    fontSize: 30, // <- Los pixeles son dependiendo del dispositivo
    color: '#8CC7FF',
  },
  input: {
    width: 250,
    marginVertical: 10,
  },
});
