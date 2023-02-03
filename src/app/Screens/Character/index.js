import React from 'react';
import {Image, View} from 'react-native';
import Label from '../../Components/Label';
import InfoItem from './Components/InfoItem';
import {CHARACTER_INFO} from './constants';
import styles from './styles';

const Character = ({route}) => {
  const character = route.params.character;
  return (
    <View>
      <View style={styles.imageContainer}>
        <Label style={styles.nameLabel}>{character.name}</Label>
        <Image style={styles.image} source={{uri: character.image}} />
      </View>
      {CHARACTER_INFO(character).map(item => (
        <InfoItem item={item} />
      ))}
    </View>
  );
};

export default Character;
