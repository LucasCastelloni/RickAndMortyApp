import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import App from './src';
import {store} from './src/redux/store';
import './src/config/i18next';
import {StatusBar} from 'react-native';
import Colors from './src/config/colors';
import SplashScreen from 'react-native-splash-screen';

const Index = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <StatusBar
        backgroundColor={Colors.basicGreen}
        barStyle={'light-content'}
      />
      <NavigationContainer>
        <App />
      </NavigationContainer>
    </Provider>
  );
};

export default Index;
