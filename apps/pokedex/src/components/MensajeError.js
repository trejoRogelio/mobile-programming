import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';

const MensajeError = ({ mensaje, isVisible, onClose }) => {
    return (
        <Modal isVisible={isVisible}>
            <View style={styles.modal}>
                <View style={styles.container}>
                    <View style={styles.content}>
                        <Image
                            source={require('../../assets/triste.png')}
                            style={styles.image}
                        />
                        <Text style={styles.text}>{mensaje}</Text>
                        <Button title="Volver a intentar" onPress={onClose} />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    content: {
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100, 
        marginBottom: 10, 
    },
    text: {
        fontSize: 16,
        color: 'black',
        marginBottom: 10,
        textAlign:'center',
    },
    button: {
        marginBottom: 10,
    },
});

export default MensajeError;
