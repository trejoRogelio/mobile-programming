import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import { Link, useNavigate } from 'react-router-native';


function GoBackBtn() {
    const navigate = useNavigate();
    const goBack = () => {
        navigate('/');
    };

    return (
        <View>
            <TouchableOpacity onPress={()=>goBack()}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Go back</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'grey', // Color de fondo del botón
        padding: 10,
        borderRadius: 5,
        margin: 10,
        width: '20%',
        elevation: 10,
        shadowColor: 'black'
    },
    buttonText: {
        color: 'white', // Color del texto del botón
        fontSize: 8,
        fontWeight: 'bold',
    },
});
  
export default GoBackBtn;