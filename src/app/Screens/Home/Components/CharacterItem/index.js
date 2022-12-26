import React from 'react';
import {View, Image} from 'react-native';
import Label from '../../../../Components/Label';

import styles from './styles';

const CharacterItem = ({character}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: character.image}} />
      <View style={styles.characterInfo}>
        <Label style={styles.title}>{character.name}</Label>
        <Label style={styles.location}>{character.location.name}</Label>
      </View>
    </View>
  );
};

export default CharacterItem;
