import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Pokedata(props) {

    const pokemon = props.pokemon;

    return (
        <View style={styles.table}>
            <View style={styles.row}>
                <Text style={styles.hp}>HP:</Text>
                <Text style={styles.hp}>{pokemon?.stats[0]?.base_stat}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.attack}>Attack:</Text>
                <Text style={styles.attack}>{pokemon?.stats[1]?.base_stat}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.defense}>Defense:</Text>
                <Text style={styles.defense}>{pokemon?.stats[2]?.base_stat}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.spattack}>Sp. Attack:</Text>
                <Text style={styles.spattack}>{pokemon?.stats[3]?.base_stat}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.spdefense}>Sp. Defense:</Text>
                <Text style={styles.spdefense}>{pokemon?.stats[4]?.base_stat}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.speed}>Speed:</Text>
                <Text style={styles.speed}>{pokemon?.stats[5]?.base_stat}</Text>
            </View>
        </View>
    );


}

const styles = StyleSheet.create({
    table: {
        border: 2,
        borderColor: 'black',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginHorizontal: 15
    },
    hp: {
        flex: 1,
        textAlign: 'center',
        color: 'white',
        backgroundColor: '#FF4218',
        fontWeight: 'bold'
    },
    attack: {
        flex: 1,
        textAlign: 'center',
        color: 'white',
        backgroundColor: '#FF7E18',
        fontWeight: 'bold'
    },
    defense: {
        flex: 1,
        textAlign: 'center',
        color: 'white',
        backgroundColor: '#E3D526',
        fontWeight: 'bold'
    },
    spattack: {
        flex: 1,
        textAlign: 'center',
        color: 'white',
        backgroundColor: '#33ACFF',
        fontWeight: 'bold'
    },
    spdefense: {
        flex: 1,
        textAlign: 'center',
        color: 'white',
        backgroundColor: '#8AE5A1',
        fontWeight: 'bold'
    },
    speed: {
        flex: 1,
        textAlign: 'center',
        color: 'white',
        backgroundColor: '#FD77FF',
        fontWeight: 'bold'
    },
});

export default Pokedata;