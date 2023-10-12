// Dependencias
import { View, ScrollView } from 'react-native';
import { NativeRouter, Routes, Route,  } from 'react-router-native';

// Components
import Home from './src/pages/Home';
import Information from './src/pages/Information';
import Navbar from './src/components/Navbar';
import { Reference } from './src/components/Reference';
export default function App() {
    return (
        <ScrollView>
        <NativeRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/information/:pokemonid' element={<Information />} />
            </Routes>
            <Reference />
        </NativeRouter>
        </ScrollView>

    );
}