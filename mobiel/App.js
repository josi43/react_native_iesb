import React from 'react';
import { Text, View, StyleSheet, BrowserRouter } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Redefinir from './screens/Redefinir';
import Nutricao from './screens/Nutricao';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Nutricao" component={Nutricao} />
        <Stack.Screen name="Redefinir" component={Redefinir} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;