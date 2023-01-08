import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import Label from '../../../../Components/Label';
import LikeIcon from '../../../../Assets/svg/like-icon.svg';

import styles from './styles';
import Colors from '../../../../../config/colors';
import {connect, useDispatch} from 'react-redux';
import {addFavorite} from '../../../../../redux/actions/characters';

const CharacterItem = ({character}) => {
  const dispatch = useDispatch();
  const toggleFavorite = () => {
    dispatch(addFavorite(character));
  };
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: character.image}} />
      <View style={styles.characterInfo}>
        <Label style={styles.title}>{character.name}</Label>
        <Label style={styles.location}>{character.location.name}</Label>
        <Label style={styles.location}>{character.species}</Label>
      </View>
      <TouchableOpacity style={styles.touchable} onPress={toggleFavorite}>
        <LikeIcon fill={Colors.white} height={20} wodth={20} />
      </TouchableOpacity>
    </View>
  );
};

export default connect()(CharacterItem);
