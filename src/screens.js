import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Dashboard from './Screens/Dashboard';

const Screens = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="InitialScreen"
        component={Dashboard}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Screens;
