import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    Image,
    Alert
} from 'react-native';
import { getWeatherByName } from './src/services/weather';
import { useState } from 'react';
import { Componente1 } from './components/Componente1';
import { Componente2 } from './components/Componente2';

export default function App() {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const onPressHanddle = async () => {
        setLoading(true)

        try {
            const resp = await getWeatherByName(city);
            const errorExist = Boolean(resp.error);
            setError(errorExist);
            setWeather(resp);
            const regex = /^[a-zA-Z\s]+$/;

            if(errorExist == true){
                Alert.alert(
                    'No se encontró la ciudad',
                    'Intenta nuevamente',
                    [
                      {
                        text: 'Aceptar',
                        onPress: () => {
                          console.log('Botón "Aceptar" presionado');
                        },
                      },
                    ],
                    { cancelable: false }
                );
                setLoading(false);
                return; 
            } else if (!regex.test(city)){
                Alert.alert(
                    'Caracteres especiales no permitidos',
                    'Ingresa solo letras y espacios en el nombre de la ciudad',
                    [
                        {
                        text: 'Aceptar',
                        onPress: () => {
                            console.log('Botón "Aceptar" presionado');
                        },
                        },
                    ],
                    { cancelable: false }
                );
                errorExist = true;
                setError(errorExist);
                setLoading(false);
                return; 
            } 
        } catch (error) {
            setError(true)
        } finally {
            setLoading(false)
        }
    }

    const handdleChangeText = (e) => {
        setCity(e);
    }

    return (
    
        <View style={styles.container}>

            <Componente1/>

            <View>
                <Text style={styles.text}>Escribe una ciudad:</Text>
                <TextInput
                    placeholder='City'
                    style={styles.input}
                    value={city}
                    onChangeText={handdleChangeText}

                />
                <Button
                    style={styles.button}
                    title='Buscar'
                    onPress={onPressHanddle}
                />
            </View>
            {
                loading && 
                <Image
                    source={require('./assets/loading.gif')}
                    style={styles.image}
                />
            }
            {
                !error && !loading && weather && (
                    <>
                        <View style={{ marginTop: 20 }}>
                            <Text style={styles.text}>Contry: {weather.location.country}</Text>
                            <Text style={styles.text}>Region: {weather.location.region}</Text>
                            <Text style={styles.text}>City: {weather.location.name}</Text>
                            <Text style={styles.text}>Temp: {weather.current.temp_c}</Text>
                            <Text style={styles.text}>Condition: {weather.current.condition.text}</Text>
                        </View>
                        <Image
                            style={{
                                width: 100,
                                height: 100
                            }}
                            source={{
                                uri: 'https:' + weather.current.condition.icon
                            }}
                        />
                    </>
                )
            }

            <Componente2/>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#34495E',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        fontSize: 15,
        width: 250,
        marginVertical: 10,
        color: '#8CC7FF',
        marginBottom: 10,
        borderWidth: 2, 
        borderColor: '#FFFFFF',  
    },      
    text: {
        fontSize: 20,
        color: '#FFFFFF',
        marginBottom: 10
    },
    button: {
        backgroundColor: '#000000',
        color: '#8CC7FF',
        borderWidth: 1,  
        borderColor: '#8CC7FF',  
        borderRadius: 5,  
        padding: 10,  
        textAlign: 'center', 
    },      
    image: {
        width: 64, 
        height: 64, 
        resizeMode: 'contain',
        marginTop: 10,
        marginBottom: 10,
    }
});
