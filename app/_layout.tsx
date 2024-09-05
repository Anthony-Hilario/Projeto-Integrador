import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Index from './index';
import LogPageScreen from './logPage';
import Configs from './configs';
import QRCodeGenerator from './qrcode';

// Define os estilos para o título personalizado
const styles = StyleSheet.create({
  img: {
    width: 40,  // Ajuste o tamanho conforme necessário
    height: 40,
    marginLeft: 10, // Ajusta o espaçamento à esquerda da imagem
  },
  headerTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitleText: {
    fontSize: 24,
    color: '#fff',
  },
});

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function AppTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
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
        tabBarActiveTintColor: '#fff', // Cor para o ícone ativo
        tabBarInactiveTintColor: 'gray', // Cor para o ícone inativo
        tabBarStyle: {
          backgroundColor: '#E91D63', // Cor de fundo da tab bar
          paddingBottom: 5
        },
      })}
    >
      <Tab.Screen name='home' component={Index} options={{ title: 'Home', headerShown: false}} />
      <Tab.Screen name='qrcode' component={QRCodeGenerator} options={{ title: 'QR Code', headerShown: false}} />
      <Tab.Screen name="logPage" component={LogPageScreen} options={{ title: 'Logs', headerShown: false }} />
      <Tab.Screen name='configs' component={Configs} options={{ title: 'Config', headerShown: false }} />
    </Tab.Navigator>
  );
}

function MainStack() {
  return (
    <Stack.Navigator initialRouteName="SafeDoor">
      <Stack.Screen 
        name="SafeDoor"
        component={AppTabs}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: '#E91D63', // Cor de fundo da barra superior
          },
          headerTintColor: '#fff', // Cor do título na barra superior
        }} 
      />
    </Stack.Navigator>
  );
}

export default function Layout() {
  return (
    <NavigationContainer independent={true}>
      <MainStack />
    </NavigationContainer>
  );
}
