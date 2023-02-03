import React from 'react';
import {View} from 'react-native';
import Label from '../../../../Components/Label';
import styles from './styles';

const InfoItem = ({item}) => (
  <View style={styles.container}>
    <Label style={styles.title}>{item.title}</Label>
    <Label style={styles.info}>{item.info}</Label>
  </View>
);

export default InfoItem;
