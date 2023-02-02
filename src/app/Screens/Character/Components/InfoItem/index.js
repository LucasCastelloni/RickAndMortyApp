import React from 'react';
import {Image, View} from 'react-native';
import Label from '../../../../Components/Label';

const InfoItem = ({item}) => (
  <View>
    <Label>{item.title}</Label>
    <Label>{item.info}</Label>
  </View>
);

export default InfoItem;
