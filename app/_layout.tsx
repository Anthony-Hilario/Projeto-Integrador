import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; // Ou outro ícone de sua escolha
import IndexScreen from './index';
import HomeScreen from './home';
import LogPageScreen from './logPage';
import QRCodeScreen from './qrcode';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

export default function AppTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case 'index':
              iconName = 'home'; // Nome do ícone FontAwesome para 'home'
              break;
            case 'configs':
              iconName = 'cogs'; // Nome do ícone FontAwesome para 'configs'
              break;
            case 'home':
              iconName = 'star'; // Nome do ícone FontAwesome para 'home'
              break;
            case 'logPage':
              iconName = 'file-text'; // Nome do ícone FontAwesome para 'logPage'
              break;
            case 'qrcode':
              iconName = 'qrcode'; // Nome do ícone FontAwesome para 'qrcode'
              break;
            default:
              iconName = 'question'; // Nome do ícone FontAwesome padrão
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="index" component={IndexScreen} options={{ title: 'Início' }} />
      <Tab.Screen name="home" component={HomeScreen} options={{ title: 'Home' }} />
      <Tab.Screen name="logPage" component={LogPageScreen} options={{ title: 'Logs' }} />
      <Tab.Screen name="qrcode" component={QRCodeScreen} options={{ title: 'QR Code' }} />
    </Tab.Navigator>
  );
}
