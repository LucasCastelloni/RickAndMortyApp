import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Colors from '../config/colors';
import Dashboard from './Screens/Dashboard';
import Login from './Screens/Login';
import LoginLogo from './Assets/svg/alien-icon.svg';
import Character from './Screens/Character';

const Screens = ({isUserLogged}) => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName={isUserLogged ? 'Dashboard' : 'Login'}>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerStyle: {
            backgroundColor: Colors.basicGreen,
          },
          headerTitle: () => <LoginLogo width={40} height={40} />,
          headerTitleAlign: 'center',
          headerBackTitleVisible: false,
          headerTintColor: 'white',
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Character"
        component={Character}
        options={{
          headerStyle: {
            backgroundColor: Colors.basicGreen,
          },
          headerTintColor: 'white',
        }}
      />
    </Stack.Navigator>
  );
};

export default Screens;
