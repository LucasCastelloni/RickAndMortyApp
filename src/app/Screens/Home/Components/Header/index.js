import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import i18next from 'i18next';
import Label from '../../../../Components/Label';
import styles from './styles';
import SpaceshipIcon from '../../../../Assets/svg/spaceship-icon.svg';

const Header = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.innerContainer}>
        <SpaceshipIcon width={25} height={25} />
        <Label style={styles.label}>{i18next.t('Home:welcome')}</Label>
      </SafeAreaView>
    </View>
  );
};

export default Header;
