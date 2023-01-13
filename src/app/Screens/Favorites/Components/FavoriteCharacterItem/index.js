import React, {useRef, useState} from 'react';
import {View, Image, Animated, TouchableOpacity} from 'react-native';
import Label from '../../../../Components/Label';
import TrashIcon from '../../../../Assets/svg/trash-icon.svg';
import ChevronRight from '../../../../Assets/svg/chevron-right.svg';

import styles from './styles';
import Colors from '../../../../../config/colors';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {removeFavorite} from '../../../../../redux/actions/characters';

const FavoriteCharacterItem = ({character}) => {
  const [toggleAnimation, setToggleAnimation] = useState(true);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const deleteFavorite = () => {
    dispatch(removeFavorite(character));
  };

  const moveAnimation = useRef(new Animated.Value(0)).current;

  const moveToLeft = () => {
    Animated.timing(moveAnimation, {
      toValue: -135,
      duration: 750,
      useNativeDriver: false,
    }).start();
  };

  const moveToRight = () => {
    Animated.timing(moveAnimation, {
      toValue: 0,
      duration: 750,
      useNativeDriver: false,
    }).start();
  };

  return (
    <>
      <Animated.View style={{...styles.container, left: moveAnimation}}>
        <Image style={styles.image} source={{uri: character.image}} />
        <View style={styles.characterInfo}>
          <Label style={styles.title}>{character.name}</Label>
          <Label style={styles.location}>{character.location.name}</Label>
          <Label style={styles.location}>{character.species}</Label>
          <Label style={styles.location}>{character.status}</Label>
        </View>
        <View style={styles.button}>
          <TouchableOpacity
            onPress={() => {
              toggleAnimation ? moveToLeft() : moveToRight();
              setToggleAnimation(prevState => !prevState);
            }}
            style={styles.touchable}>
            <ChevronRight height={15} width={15} />
          </TouchableOpacity>
        </View>
      </Animated.View>
      <View style={styles.hiddenButtons}>
        <TouchableOpacity onPress={deleteFavorite} style={styles.deleteButton}>
          <TrashIcon height={30} width={30} stroke={Colors.white} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Character', {character: character});
          }}
          style={styles.seeMore}>
          <Label style={styles.seeMoreLabel}>Ver más</Label>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default FavoriteCharacterItem;
