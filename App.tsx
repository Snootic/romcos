import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Index from './app/Index';
import TrackSelection from './app/TrackSelection';
import CarSelection from './app/CarSelection';

type RootStackParamList = {
  Index: undefined;
  TrackSelection: undefined;
  CarSelection: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Index'>
        <Stack.Screen name="Index" component={Index} />
        <Stack.Screen name="TrackSelection" component={TrackSelection} />
        <Stack.Screen name="CarSelection" component={CarSelection} />
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
