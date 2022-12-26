import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider} from 'react-redux';
import App from './src';
import {store} from './src/redux/store';
import './src/config/i18next';
import {StatusBar} from 'react-native';
import Colors from './src/config/colors';

const Index = () => {
  return (
    <Provider store={store}>
      <StatusBar
        backgroundColor={Colors.brandGreen}
        barStyle={'light-content'}
      />
      <NavigationContainer>
        <App />
      </NavigationContainer>
    </Provider>
  );
};

export default Index;
