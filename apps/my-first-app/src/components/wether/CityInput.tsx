import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { getWetherByName } from '../../services/wether';
import { useState } from 'react';
import { ResultInfo } from './ResultInfo';
import { regexInput } from '../../config/constants';

export const CityInput = () => {
  const [city, setCity] = useState('');
  const [wether, setWether] = useState<any>();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const onPressHandle = async () => {
    try {
      const isValidInput = regexInput.test(city);
      if (!isValidInput) {
        Alert.alert('Ciudad Invalida');
        return;
      }
      setLoading(true);
      const resp = await getWetherByName(city);
      const errorExist = Boolean(resp.error);
      if (errorExist) {
        Alert.alert('Error al encontrar la ciudad');
      }
      setError(errorExist);
      setWether(resp);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleChangeText = e => {
    setCity(e);
    return;
  };
  return (
    <>
      {!loading ? (
        <View style={styles.container}>
          <Text style={styles.text}>Write a City:</Text>
          <TextInput
            placeholder='City'
            style={styles.input}
            value={city}
            onChangeText={handleChangeText}
          />
          <TouchableOpacity
            style={styles.appButtonContainer}
            onPress={onPressHandle}>
            <Text style={styles.appButtonText}>Buscar</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={{ marginTop: 20 }}>
          <ActivityIndicator size='large' />
        </View>
      )}
      {!error && !loading && wether && <ResultInfo wether={wether} />}
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 250,
    marginVertical: 10,
  },
  container: {
    marginVertical: 40,
    borderRadius: 10,
    borderWidth: 2,
    padding: 10,
    borderColor: 'darkblue',
  },
  text: {
    fontSize: 20,
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: '#006989',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});
