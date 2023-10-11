import { Button, Text, TextInput, View, Image } from 'react-native';
import { Link } from 'react-router-native';
import { GetPokemonByName } from '../pokeapi';
import { styles } from '../../App';
import PokemonData from '../components/PokemonData';
import { useState } from 'react';

const Information = () => {
  const [pokemonInput, setPokemonInput] = useState('');
  const InputChangeHandler = (e) => {
    setPokemonInput(e);
  };

  const [pokemonName, setPokemonName] = useState('');
  const SetPokemonNameSearch = () => {
    setPokemonName(pokemonInput);
  };

  const { data, loading, error } = GetPokemonByName(pokemonName);
  return (
    <View style={styles.container}>
      <Text style={styles.txt_title}>Pokemon information</Text>
      <Image
        style={styles.img}
        source={
          data == null
            ? loading
              ? require('../../assets/images/loadingsnail.gif')
              : require('../../assets/images/pokebola.png')
            : { uri: data.sprites.other.home.front_default }
        }
      />
      <TextInput
        placeholder='Pokemon name'
        style={styles.input_pokesearch}
        onChangeText={InputChangeHandler}
        onSubmitEditing={() => {
          SetPokemonNameSearch();
        }}
      ></TextInput>
      <Button
        title='Search Pokemon'
        onPress={() => {
          SetPokemonNameSearch();
        }}
      ></Button>

      <PokemonData data={data} loading={loading} error={error} />
      <Link to='/' style={styles.btn_custom}>
        <Text style={styles.txt_white}>Return to home</Text>
      </Link>
    </View>
  );
};

export default Information;
