import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Index from './home';
import LogPageScreen from './logPage';
import Configs from './configs';
import QRCodeGenerator from './qrcode';
import Login from './index'; // Sua página de login

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function AppTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          switch (route.name) {
            case 'home':
              iconName = 'home';
              break;
            case 'logPage':
              iconName = 'file-text';
              break;
            case 'config':
              iconName = 'gear';
              break;
            case 'qrcode':
              iconName = 'qrcode';
              break;
            default:
              iconName = 'gear';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: '#E91D63',
          paddingBottom: 5,
        },
      })}
    >
      <Tab.Screen name="home" component={Index} options={{ title: 'Home', headerShown: false }} />
      <Tab.Screen name="qrcode" component={QRCodeGenerator} options={{ title: 'QR Code', headerShown: false }} />
      <Tab.Screen name="logPage" component={LogPageScreen} options={{ title: 'Logs', headerShown: false }} />
      <Tab.Screen name="configs" component={Configs} options={{ title: 'Config', headerShown: false }} />
    </Tab.Navigator>
  );
}

export default function Layout() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado de login

  // Função de login que será passada para a tela de login
  const handleLogin = () => {
    setIsLoggedIn(true); // Simula um login bem-sucedido
  };

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        {isLoggedIn ? (
          // Se o usuário estiver logado, mostre as tabs
          <Stack.Screen
            name="SafeDoor"
            component={AppTabs}
            options={{
              headerShown: true,
              headerStyle: { backgroundColor: '#E91D63' },
              headerTintColor: '#fff',
            }}
          />
        ) : (
          // Caso contrário, mostre a tela de login e passe a função de login como prop
          <Stack.Screen
            name="login"
            options={{
              headerShown: true,
              headerStyle: { backgroundColor: '#E91D63' },
              headerTintColor: '#fff',
            }}
          >
            {props => <Login {...props} onLogin={handleLogin} />}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
