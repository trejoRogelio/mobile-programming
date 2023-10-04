// Dependencias
import { View } from 'react-native';
import { Constants } from 'expo-constants';
import { NativeRouter, Routes, Route } from 'react-router-native';

// Components
import Home from './src/pages/Home';
import Information from './src/pages/Information';
import Navbar from './src/components/Navbar';

const DefinedRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/information' element={<Information />} />
    </Routes>
  );
};

export default function App() {
  return (
    <View>
      <NativeRouter>
        <Navbar/>
        <DefinedRoutes />
      </NativeRouter>
    </View>
  );
}
