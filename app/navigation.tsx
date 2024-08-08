// Navigation.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './login'; // Certifique-se de que o caminho está correto
import Index from './index'; // Crie uma nova tela para redirecionar

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="index" component={Index} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
