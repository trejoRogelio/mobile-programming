// Dependencias
import { View } from 'react-native';
import Constants from 'expo-constants';
import { NativeRouter, Routes, Route } from 'react-router-native';

// Components
import Home from './src/pages/Home';
import Information from './src/pages/Information';
import Type from './src/pages/Type'
import Ability from './src/pages/Ability'
import Navbar from './src/components/Navbar';

export default function App() {
    return (
        <NativeRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/information/:pokemonid' element={<Information />} />
                <Route path='/type/:typeid' element={<Type />}/>
                <Route path='/ability/:abilityid' element={<Ability />}/>
            </Routes>
        </NativeRouter>

    );
}