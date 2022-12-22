import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Favorites from '../Favorites';
import Home from '../Home';
import PersonalInfo from '../PersonalInfo';

const Tab = createBottomTabNavigator();

const Dashboard = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Favorites" component={Favorites} />
    <Tab.Screen name="PersonalData" component={PersonalInfo} />
  </Tab.Navigator>
);

export default Dashboard;
