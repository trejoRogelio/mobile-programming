import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Alert, Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

export default function App() {
  const HasbullaImg =  'https://cdn.milenio.com/uploads/media/2022/10/13/hasbulla-instagram.jpg';
  const [imageUri, setImageUri] = useState(HasbullaImg);
  const handlePress = async () => {
    const result = await ImagePicker.launchImageLibraryAsync();
    if (result.canceled) {
      Alert.alert('Dennied permission');
      return;
    }
    setImageUri(result.assets[0].uri)
  };
  return (
    <View style={styles.container}>
      <Text>Select an image</Text>
      <Image
        width={200}
        height={200}
        style={{ margin: 20 }}
        source={{
          uri: imageUri
        }}
      />
      <Button title="Open gallery" onPress={handlePress} />
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
