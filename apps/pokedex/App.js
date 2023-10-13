// Dependencias
import { View } from 'react-native';
import Constants from 'expo-constants';
import { NativeRouter, Routes, Route } from 'react-router-native';

// Components
import Home from './src/pages/Home.js';
import Information from './src/pages/Information.js';
import Navbar from './src/components/Navbar.js';


export default function App() {
    return (
        <NativeRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/information/:pokemonid' element={<Information />} />
            </Routes>
        </NativeRouter>

    );
}