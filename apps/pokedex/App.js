// Dependencias
import { View } from 'react-native';
<<<<<<< HEAD
import { Constants } from 'expo-constants';
=======
import Constants from 'expo-constants';
>>>>>>> 9eba55971e178c6907ee037230a7f9156f75cec9
import { NativeRouter, Routes, Route } from 'react-router-native';

// Components
import Home from './src/pages/Home';
import Information from './src/pages/Information';
import Navbar from './src/components/Navbar';

<<<<<<< HEAD
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
=======
export default function App() {
    return (
        <NativeRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/information' element={<Information />} />
            </Routes>
        </NativeRouter>

    );
}
>>>>>>> 9eba55971e178c6907ee037230a7f9156f75cec9
