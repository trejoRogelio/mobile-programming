// Dependencias
import { StyleSheet, View } from 'react-native';
import { NativeRouter, Routes, Route } from 'react-router-native';

// Components
import Home from './src/pages/Home';
import Information from './src/pages/Information';
import Navbar from './src/components/Navbar';

const DefinedRoutes = () => {
    return (
        <View style={styles.main_container}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/information" element={<Information />} />
            </Routes>
        </View>
    );
};

export default function App() {
    return (
        <View style={styles.main}>
            <NativeRouter>
                <Navbar />
                <DefinedRoutes />
            </NativeRouter>
        </View>
    );
}

export const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    main_container: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 20,
    },
    container: {
        alignItems: 'center',
    },
    img: {
        width: 200,
        height: 200,
    },
    input_pokesearch: {
        padding: 5,
        width: 250,
        marginVertical: 10,
        borderColor: '#CB6D6D',
        borderWidth: 2,
        // outlineColor: '#D6A4A4',
        // outlineStyle: 'solid',
        // outlineWidth: 4,
    },
});
