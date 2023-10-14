import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    fullWidthButton: {
        backgroundColor: 'blue',
        width: '100%',
        padding: 10,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
    centeredText: {
        textAlign: 'center',
        fontSize: 18,
    },
    errorContainer: {
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorImage: {
        width: 150,
        height: 150,
    },
    container: {
        padding: 10,
    },
    pokemonItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    pokemonImage: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
    pokemonName: {
        fontSize: 18,
    },
});
