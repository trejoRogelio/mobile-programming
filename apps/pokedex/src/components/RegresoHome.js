import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Link } from "react-router-native";

const RegresoHome = () => {

    return (
        <View>
            <Link to='/'>
                <View style={styles.View}>
                    <Image style={styles.Image} source={require('../../assets/home.png')} />
                    <Text style={styles.Link}>Volver al Inicio</Text>
                </View>
            </Link>
        </View>

    )
}

const styles = StyleSheet.create({
    View: {
        flexDirection:"row",
        alignItems:"center",
        textAlign:"center",
        justifyContent: 'center',
        backgroundColor: '#686F70',
        borderRadius:20,
        width:250,
    },
    Link: {
        fontSize: 20,
        color: 'white',
        padding: 10,
    },
    Image: {
        width: 50,
        height: 50,
        ackgroundColor: '#686F70',
    }
});

export default RegresoHome;