import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Colors from '../../../config/colors';
import Favorites from '../Favorites';
import Home from '../Home';
import PersonalInfo from '../PersonalInfo';
import HomeIcon from '../../Assets/svg/home-icon.svg';
import FavoritesIcon from '../../Assets/svg/favorites-icon.svg';
import ProfileIcon from '../../Assets/svg/user-icon.svg';

const Tab = createBottomTabNavigator();

const ICON_SIZE = 25;

const screenOptions = {
  headerStyle: {
    backgroundColor: Colors.brandGreen,
  },
  headerTintColor: Colors.white,
};

const Dashboard = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarStyle: {backgroundColor: Colors.brandGreen},
      tabBarShowLabel: false,
    }}>
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        //...screenOptions,
        tabBarIcon: ({focused}) => (
          <HomeIcon
            width={ICON_SIZE}
            height={ICON_SIZE}
            fill={focused ? Colors.tabBarIconActive : Colors.tabBarIconInactive}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Favorites"
      component={Favorites}
      options={{
        //...screenOptions,
        tabBarIcon: ({focused}) => (
          <FavoritesIcon
            width={ICON_SIZE}
            height={ICON_SIZE}
            fill={focused ? Colors.tabBarIconActive : Colors.tabBarIconInactive}
          />
        ),
      }}
    />
    <Tab.Screen
      name="PersonalData"
      component={PersonalInfo}
      options={{
        //...screenOptions,
        tabBarIcon: ({focused}) => (
          <ProfileIcon
            width={ICON_SIZE}
            height={ICON_SIZE}
            fill={focused ? Colors.tabBarIconActive : Colors.tabBarIconInactive}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

export default Dashboard;
