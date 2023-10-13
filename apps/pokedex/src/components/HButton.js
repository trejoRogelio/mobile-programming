import { View, Text, StyleSheet } from 'react-native'
import { Link } from 'react-router-native';

const HButton = () => {
  return (
    <View>
        <Link style={styles.button} to='/'>
            <Text style={styles.buttonText}> Go To Home!!!</Text>
        </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'red', // Color de fondo (ajusta el color rojo según tu preferencia)
    padding: 10,
    borderRadius: 10, // Bordes redondeados
    shadowColor: 'rgba(255, 255, 255, 0.2)', // Color blanco con opacidad para el efecto de brillo
    shadowOffset: { width: 0, height: 4 }, // Desplazamiento del brillo
    shadowRadius: 5,
  },
  buttonText: {
    color: 'white', // Texto en color blanco
    fontWeight: 'bold', // Texto en negrita
  },
  });

export default HButton