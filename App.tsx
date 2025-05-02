import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Index from './app';
import TrackSelection from './app/trackSelection';
import CarSelection from './app/carSelection';

const Stack = createNativeStackNavigator();

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

export default App;
