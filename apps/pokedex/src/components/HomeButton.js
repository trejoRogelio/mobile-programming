import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import { Link } from 'react-router-native';

const HomeButton = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
                <Link to='/'>
                    <Text style={styles.buttonText}>Go to Home</Text>
                </Link>
            </TouchableOpacity>
            <Text>
                
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#007ACC',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15
    },
    button: {
        backgroundColor: '#ffde00', 
        paddingVertical: 10,
        paddingHorizontal: 50,
        borderRadius: 10, 
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 1, 
        elevation: 2,
        marginTop: 15
    },
    buttonText: {
        color: '#000000',
        fontSize: 18,
        fontWeight: 'bold', 
    }
});

export default HomeButton;