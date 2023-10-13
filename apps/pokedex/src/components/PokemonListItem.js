import { Button, Text, View, FlatList, StyleSheet, Image, TouchableOpacity, ToastAndroid} from 'react-native';
import { Link, useNavigate } from 'react-router-native';

export const PokemonListItem = ({pokemon}) => {
    const navigate = useNavigate();
    const goToInfo = () => {
        navigate(`/information/${pokemon.id}`);
    };
    return (
        <TouchableOpacity
            style={styles.item}
            // onPress={navigate(`/information/${pokemon.id}`)}
        >
            <TouchableOpacity onPress={()=>goToInfo()}> 
                <Image 
                    // source={pokemon.img}
                    style={styles.image}
                    source={
                        {
                            uri: pokemon.img
                        }
                    }
                />
            </TouchableOpacity> 
            <TouchableOpacity style={styles.content}  onPress={()=>goToInfo()}>
                <Text
                    style={{
                        ...styles.title,
                        color: 'black',
                    }}>
                    {pokemon.name}
                </Text>
            </TouchableOpacity>
        </TouchableOpacity>
        
    );
};

const styles = StyleSheet.create({
    item: {
        // padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        width: 250,
        flexDirection: 'row', // Para alinear la imagen y el texto horizontalmente
        alignItems: 'center', // Para centrar verticalmente la imagen y el texto
        borderRadius: 10, // Radio de las esquinas redondeadas
        borderWidth: 1, // Ancho del borde
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 10,
        backgroundColor: '#F1F7ED',
        shadowColor: '#52006A',
    },
    content: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        flex: 1,
        fontSize: 15,
    
        textShadowOffset: {width: 1, height: 1}, // Desplazamiento del borde
        textShadowRadius: 1, // Radio del borde
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 10,
        borderRadius: 25, // Opcional: para imágenes redondeadas
        borderWidth: 1, // Ancho del borde
        borderColor: 'rgba(0, 0, 0, 0.5)',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
  });