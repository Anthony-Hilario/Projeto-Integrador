import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Index from './index';
import LogPageScreen from './logPage';
import QRCodeScreen from './qrcode';
import Configs from './configs';

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
            case 'qrcode':
              iconName = 'qrcode';
              break;
            case 'config':
              iconName = 'gear';
              break;
            default:
              iconName = 'gear';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name='home' component={Index} options={{ title: 'Home' }} />
      <Tab.Screen name="qrcode" component={QRCodeScreen} options={{ title: 'QR Code' }} />
      <Tab.Screen name="logPage" component={LogPageScreen} options={{ title: 'Logs' }} />
      <Tab.Screen name='configs'component={Configs} options={{ title: 'Config' }} />
    </Tab.Navigator>
  );
}

function MainStack() {
  return (
    <Stack.Navigator initialRouteName="Index">
      <Stack.Screen 
        name="Main" 
        component={AppTabs}
        options={{ headerShown: false }} 
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
