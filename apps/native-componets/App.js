import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';
import { useState } from 'react';

import * as ImagePiker from 'expo-image-picker';

export default function App() {
    const [imageUri, setImageUri] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK2nG24AYDm6FOEC7jIfgubO96GbRso2Xshu1f8abSYQ&s");


    const handdlePress = async () => {
        const permitions = await ImagePiker.requestCameraPermissionsAsync();

        if (!permitions.granted) {
            Alert.alert("This is bloquet!!!!!!!")
        }

        const result = await ImagePiker.launchCameraAsync()
        const [camera] = result.assets;

        setImageUri(camera)
    }

    return (
        <View style={styles.container}>
            <View>
                <Text>Select an image</Text>
                <Image
                    style={{ width: 250, height: 250 }}
                    source={{
                        uri: imageUri
                    }}
                />
                <Button
                    title='Click ME!!!'
                    onPress={handdlePress}
                />
            </View>


            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
