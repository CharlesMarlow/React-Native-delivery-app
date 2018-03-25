// React
import React from 'react';
import { StackNavigator } from 'react-navigation';

// Comps
import HomeScreen from './js/comps/HomeScreen/HomeScreen';
import DeliveryScreen from './js/comps/DeliveryScreen/DeliveryScreen';

const appNavigator = StackNavigator({
  HomeScreen: {
    screen: HomeScreen,
  },
  DeliveryScreen: {
    screen: DeliveryScreen,
  }
},
  { headerMode: 'none' });

export default appNavigator;
