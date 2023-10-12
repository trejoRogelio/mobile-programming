// Dependencias
import { View } from 'react-native';
import Constants from 'expo-constants';
import { NativeRouter, Routes, Route } from 'react-router-native';

// Components
import Home from './src/pages/Home';
import Information from './src/pages/Information';
import Header from './src/components/Header'; // Importa Header
import Button from './src/components/Button'; // Importa Button
import Footer from './src/components/Footer'; // Importa Footer

export default function App() {
  return (
    <NativeRouter>
      <Header /> {/* Agrega el encabezado */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/information/:pokemonid' element={<Information />} />
      </Routes>
      <Footer /> {/* Agrega el pie de página */}
    </NativeRouter>
  );
}
