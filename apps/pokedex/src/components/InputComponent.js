import React from 'react';
import { TextInput, Button, StyleSheet, View } from 'react-native';

const InputComponent = ({ value, onChangeText, onPress }) => {
    return (
        <View style={styles.inputs}>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                placeholder='Buscar un Pokémon'
                value={value}
            />
            <Button
                onPress={onPress}
                title='Buscar'
                color='#E53939'
            />
        </View>
    );
};

const styles = StyleSheet.create({
    inputs: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    input: {
        height: 40,
        width: 200,
        borderColor: 'gray',
        borderWidth: 1,
        marginRight: 10,
        paddingLeft: 10,
    },
});

export default InputComponent;
