import * as React from 'react';
import { Image, View } from 'react-native';
import { Banner } from 'react-native-paper';
import BottomNavigation from '../components/bottom-navigation';
import Header from '../components/header';



export default function MainPage() {
  const [visible, setVisible] = React.useState(true);

  return (
   <BottomNavigation></BottomNavigation>
  );
}

