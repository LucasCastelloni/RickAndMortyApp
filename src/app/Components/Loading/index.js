import React from 'react';
import {Modal, View} from 'react-native';
import styles from './styles';
import LottieView from 'lottie-react-native';

const Loading = ({visible}) => {
  return (
    <Modal visible={visible} transparent={true}>
      <View style={styles.modalBackground}>
        <View style={styles.container}>
          <LottieView
            source={require('../../Assets/animations/alternativeLoading.json')}
            style={styles.animation}
            autoPlay
            loop
          />
        </View>
      </View>
    </Modal>
  );
};

export default Loading;
