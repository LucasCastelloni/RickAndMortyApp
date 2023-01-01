import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import i18next from 'i18next';
import Label from '../../../../Components/Label';
import styles from './styles';
import SpaceshipIcon from '../../../../Assets/svg/spaceship-icon.svg';
import CustomTextInput from '../../../../Components/CustomTextInput';
import SearchIcon from '../../../../Assets/svg/search-icon.svg';
import Colors from '../../../../../config/colors';

const Header = () => {
  const onSubmitEditing = text => {
    console.log('value', text);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.innerContainer}>
        {/* <SpaceshipIcon width={25} height={25} /> */}
        <Label style={styles.label}>{i18next.t('Home:welcome')}</Label>
        <CustomTextInput
          Icon={SearchIcon}
          iconProps={{fill: Colors.lighterGray}}
          placeholder={i18next.t('Home:search')}
          onSubmitEditing={({nativeEvent: {text}}) => onSubmitEditing(text)}
        />
      </SafeAreaView>
    </View>
  );
};

export default Header;
