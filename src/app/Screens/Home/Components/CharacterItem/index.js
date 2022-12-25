import React from 'react';
import {View, Text, Image} from 'react-native';

import styles from './styles';

const CharacterItem = ({character}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: character.image}} />
      <View style={styles.characterInfo}>
        <Text style={styles.title}>{character.name}</Text>
        <Text style={styles.location}>Ubicación</Text>
        <Text style={styles.name}>{character.location.name}</Text>
      </View>
    </View>
  );
};

export default CharacterItem;
