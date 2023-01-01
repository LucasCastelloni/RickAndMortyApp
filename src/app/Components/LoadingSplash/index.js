import LottieView from 'lottie-react-native';
import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

const LoadingSplash = () => {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('../../Assets/animations/alternativeLoading.json')}
        style={styles.animation}
        autoPlay
        loop
      />
    </View>
  );
};

export default LoadingSplash;
