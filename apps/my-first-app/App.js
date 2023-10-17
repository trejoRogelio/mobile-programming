import React, { useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import config from '../../config'; 
import SearchBar from './SearchBar';
import WeatherDisplay from './WeatherDisplay';
import { getWeatherByName } from './src/services/wether';

export default function App() {
  const [weather, setWeather] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': config.apiKey,
      'X-RapidAPI-Host': config.apiHost,
    },
  };

  const onSearch = async (city) => {
    setLoading(true);
    try {
      const resp = await getWeatherByName(city);
      const errorExist = Boolean(resp.error);
      setError(errorExist);
      setWeather(resp);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>Weather App</Text>
      <SearchBar onSearch={onSearch} />
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
          {error && <Text style={styles.errorText}>Error occurred!</Text>}
          {!error && weather && <WeatherDisplay weather={weather} />}
        </>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#26252d',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainTitle: {
    fontSize: 30,
    color: '#8CC7FF'
  },
  
  errorText: {
    color: '#8CC7FF'
  },
});
