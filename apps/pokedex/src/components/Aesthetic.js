import { StyleSheet } from "react-native";
import Constants from 'expo-constants';

const Aesthetic = StyleSheet.create({
    navbar: {
        marginTop: Constants.statusBarHeight,
        padding: 20,
        backgroundColor: '#E53939'
    },
    navbarText: {
        color: 'white',
        fontSize: 30,
        fontStyle: 'italic',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    main: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    inputs: {
        width: 400,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    stat: {
        textTransform: 'capitalize',
        fontSize: 20
    },
    nameStat:{
        fontWeight: 'bold', 
        fontSize: 20  
    },
    block: {

        flexDirection: 'column',
        marginHorizontal: 30,
        marginVertical: 20

    },
    boton: {
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 5,
        width: 150,
        justifyContent: 'center',
        alignSelf: 'center'
      },
    textoBoton: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
      },
    textError: {
        color: 'red', 
        fontSize: 18,
        margin: 120,
        fontWeight: 'bold'
    },
    title:{
        fontSize: 30, 
        textAlign: 'center',
        fontWeight: 'bold'
    },
    refer:{
        alignSelf:'center',
        marginVertical: 50,
        fontWeight: '800'
    }
})

export default Aesthetic;