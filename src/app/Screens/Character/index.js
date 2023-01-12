import React from 'react';
import {Image, View} from 'react-native';
import Label from '../../Components/Label';
import styles from './styles';

const Character = ({route}) => {
  const character = route.params.character;
  return (
    <View>
      <Image style={styles.image} source={{uri: character.image}} />
      <Label>{character.name}</Label>
      <Label>{character.location.name}</Label>
      <Label>{character.species}</Label>
      <Label>{character.gender}</Label>
      <Label>{character.status}</Label>
    </View>
  );
};

export default Character;
