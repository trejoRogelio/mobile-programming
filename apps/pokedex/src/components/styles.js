import { StyleSheet } from 'react-native';

export const homeStyles = StyleSheet.create({
    main: {
        alignItems: 'center',
    },
    inputs: {
        width: 400,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10,
    },
    input: {
        height: 40,
        width: '70%',
        borderColor: 'gray',
        borderWidth: 1,
        paddingLeft: 10,
    }
});

export const informationStyles = StyleSheet.create({
    text: {
        fontSize: 15,
        marginBottom: 10,
    },
    link: {
        marginTop: 20,
        alignItems: 'center',
    },
    linkText: {
        fontSize: 18,
        color: 'blue',
    },
});

export const pokemonListStyles = StyleSheet.create({
    pokemonCard: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    pokemonImage: {
        height: 50,
        width: 50,
        marginRight: 10,
    },
    link: {
        textDecorationLine: 'none',
    },
});

export const pokemonList = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});