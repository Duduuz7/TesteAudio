
import { ScrollView, StatusBar, StyleSheet, Text, View, } from 'react-native';

import { useFonts, poppins_500Medium, poppins_400Regular, poppins_700Bold} from '@expo-google-fonts/poppins';
import { Container } from './style.js'
// import { ScrollViewContainer } from './src/components/Container/Container';
import { Header } from './src/components/Header/Header.js';
import { Home } from './src/screens/Home/Home.js';



export default function App() {

  let [fontsLoaded, fontError] = useFonts({
    poppins_500Medium,
    poppins_400Regular,
    poppins_700Bold
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <>

      <StatusBar translucent backgroundColor='trasparent' barStyle={'light-content'} />

      <Home />

    </>
  );
}

