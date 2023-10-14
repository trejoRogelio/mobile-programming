import { StyleSheet } from "react-native";
import Constants from 'expo-constants';

const Aesthetic = StyleSheet.create({
    navContainer: {
        marginTop: Constants.statusBarHeight,
        padding: 20,
        backgroundColor: '#E53939'
    },
    navText: {
        color: 'white',
        fontSize: 30,
        fontStyle: 'italic',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    content: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    inputSection: {
        width: 400,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    infoText: {
        textTransform: 'capitalize',
        fontSize: 20
    },
    nameStyle: {
        fontWeight: 'bold', 
        fontSize: 20  
    },
    infoBlock: {

        flexDirection: 'column',
        marginHorizontal: 30,
        marginVertical: 20

    },
    actionButton: {
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 5,
        width: 150,
        justifyContent: 'center',
        alignSelf: 'center'
      },
    buttonLabel: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
      },
    errorText: {
        color: 'red', 
        fontSize: 18,
        margin: 120,
        fontWeight: 'bold'
    },
    sectionTitle:{
        fontSize: 30, 
        textAlign: 'center',
        fontWeight: 'bold'
    },
    referenceText:{
        alignSelf:'center',
        marginVertical: 50,
        fontWeight: '800'
    }
})

export default Aesthetic;
