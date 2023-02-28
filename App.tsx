import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainPage from './pages/main-page';
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';




export default function App() {
  return (
    <PaperProvider theme={theme}>
    <NavigationContainer>
      <MainPage></MainPage>
    </NavigationContainer>
    </PaperProvider>


  );
}

const theme = {
  ...DefaultTheme,
  colors: {
    secondaryContainer: 'transparent',
  },
};