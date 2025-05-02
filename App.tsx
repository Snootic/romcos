import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Index from './app';
import TrackSelection from './app/trackSelection';
import CarSelection from './app/carSelection';
import AutodromoScreen from './app/dev/autodromoTest';

type RootStackParamList = {
  index: undefined;
  trackSelection: undefined;
  carSelection: undefined;
  AutodromoScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='index'>
        <Stack.Screen name="index" component={Index} />
        <Stack.Screen name="trackSelection" component={TrackSelection} />
        <Stack.Screen name="carSelection" component={CarSelection} />
        <Stack.Screen name="AutodromoScreen" component={AutodromoScreen} />
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
