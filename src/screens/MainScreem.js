import React, {useState} from 'react';
import {View, StyleSheet, StatusBar, SafeAreaView} from 'react-native';
import Carousel from '../components/Carousel';
import BottomNavBar from '../components/BottomNavBar';
import Icons from '../constants/Icons';
import UserHeader from '../components/UserHeader';
import Colors from '../constants/Colors';
import Background from '../components/Background';

const MainScreen = () => {
  const [currentScreen, setCurrentScreen] = useState(1);
  const cards = [
    {
      id: 1,
      imageHeader: require('../assets/rock1.png'),

      title: 'Moonstone Keychain',
      description: [
        'Choosing the Best',
        'Gemstone for Your',
        'Necklace and Jewelry',
      ],
      button: {
        label: 'View',
        action: () => {
          console.log('Moonstone Keychain');
        },
      },
    },
    {
      id: 2,
      imageHeader: require('../assets/rock2.png'),
      title: 'Sapphire Keychain',
      description: [
        'Choosing the Best',
        'Gemstone for Your',
        'Necklace and Jewelry',
      ],
      button: {
        label: 'View',
        action: () => {
          console.log('Sapphire Keychain');
        },
      },
    },
    {
      id: 3,
      imageHeader: false,
      buttonHeader: {
        icon: Icons.plus,
        action: () => {
          console.log('Add a Wearable');
        },
      },
      title: 'Add a Wearable',
      description: [
        "Don't See One You Like?",
        'Choosing the Best',
        'Gemstone for Your',
        'Necklace and Jewelry',
      ],
      button: false,
    },
  ];
  const buttons = [
    {
      icon: Icons.wearables,
      label: 'Wearable',
      action: () => {
        console.log('Navigating to WearablePage');
        setCurrentScreen(1);
      },
    },
    {
      icon: Icons.profile,
      label: 'Profile',
      action: () => {
        console.log('Navigating to ProfilePage');
        setCurrentScreen(2);
      },
    },
    {
      icon: Icons.info,
      label: 'Help',
      action: () => {
        console.log('Navigating to HelpPage');
        setCurrentScreen(3);
      },
    },
  ];
  return (
    <View style={style.container}>
      <StatusBar backgroundColor={Colors.blue2} barStyle={'light-content'} />
      <Background />
      <SafeAreaView>
        <UserHeader />
        <Carousel cards={cards} />
        <View style={style.bottomOpacity}>
          <BottomNavBar buttons={buttons} isActive={currentScreen} />
        </View>
      </SafeAreaView>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    flex: 1,
    justifyContent: 'center',
  },
});

export default MainScreen;
