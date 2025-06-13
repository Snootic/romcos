import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Index from './app/index';
import TrackSelection from './app/trackSelection';
import CarSelection from './app/carSelection';
import AutodromoScreen from './app/dev/autodromoTest';
import Schedule from './app/schedule';
import Profile from './app/profile';
import ViewCar from './app/viewCar';
import ViewAutodromo from './app/viewAutodromo';
import UserSchedules from './app/userSchedules';
import Payment from './app/payment';

import { Carro } from './models/Carro';
import { Autodromo } from './models/Autodromo';

export type RootStackParamList = {
  index: undefined;
  trackSelection: undefined;
  carSelection: undefined;
  schedule: undefined;
  userSchedules: undefined;
  profile: undefined;
  autodromoScreen: undefined;
  viewCar: { carro: Carro };
  viewAutodromo: { autodromo: Autodromo};
  payment: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='index'>
        <Stack.Screen name="index" component={Index} />
        <Stack.Screen name="trackSelection" component={TrackSelection} />
        <Stack.Screen name="carSelection" component={CarSelection} />
        <Stack.Screen name="schedule" component={Schedule} />
        <Stack.Screen name="userSchedules" component={UserSchedules} />
        <Stack.Screen name="profile" component={Profile} />
        <Stack.Screen name="autodromoScreen" component={AutodromoScreen} />
        <Stack.Screen name="viewCar" component={ViewCar} />
        <Stack.Screen name="viewAutodromo" component={ViewAutodromo} />
        <Stack.Screen name="payment" component={Payment} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export default App;
