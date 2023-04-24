// React Expo 
import { SafeAreaView, StyleSheet,  } from 'react-native';
import React, { useEffect, useState } from 'react';
// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Screens
import Home from './screens/home'
import Income from './screens/Income'
import Expenses from './screens/Expenses'
import Add from './screens/Add'

// Styling
import properties from './assets/style/mainProps';
import NavigationHeaderOptions from './assets/style/headerData'


export default function App() {
  const Stack = createNativeStackNavigator();

  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          {/* For simple component implementation */}
          <Stack.Screen name="Home" component={Home} options={NavigationHeaderOptions}/>
          {/* For Additional Props */}
          <Stack.Screen name="Add" options={NavigationHeaderOptions} component={Add}/>
          <Stack.Screen name="Income" options={NavigationHeaderOptions}>{() => <Income/>}</Stack.Screen>
          <Stack.Screen name="Expenses" options={NavigationHeaderOptions} component={Expenses}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}
