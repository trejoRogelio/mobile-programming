import { Button, Text, TextInput, View, Image } from 'react-native';
import { Link } from 'react-router-native';
import { GetPokemonByName } from '../pokeapi';
import { styles } from '../../App';
import PokemonData from '../components/PokemonData';
import { useState } from 'react';

const Information = () => {
  const [pokemonInput, setPokemonInput] = useState('');
  const InputChangeHandler = (e) => {
    console.log(e);
    setPokemonInput(e);
  };

  const [pokemonName, setPokemonName] = useState('');
  const SetPokemonNameSearch = () => {
    setPokemonName(pokemonInput);
  };

  const { data, loading, error } = GetPokemonByName(pokemonName);

  if (error != null) {
    return <Text>ERROR EN LA PETICIÓN: </Text>;
  }
  return (
    <View style={styles.container}>
      <Text>Pokemon information</Text>
      <Image
        style={styles.img}
        source={require('../../assets/images/pokebola.png')}
      />
      <TextInput
        placeholder='Pokemon name'
        style={styles.input_pokesearch}
        onChangeText={InputChangeHandler}
      ></TextInput>
      <Button
        title='Search Pokemon'
        onPress={() => {
          SetPokemonNameSearch();
        }}
      ></Button>

      {/* <PokemonData data={data} loading={loading} /> */}
      <Link to='/'>
        <Text>Return to home</Text>
      </Link>
    </View>
  );
};

export default Information;
