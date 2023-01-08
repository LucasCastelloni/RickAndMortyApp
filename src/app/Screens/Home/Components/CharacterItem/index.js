import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import Label from '../../../../Components/Label';
import LikeIcon from '../../../../Assets/svg/like-icon.svg';
import ChevronRight from '../../../../Assets/svg/chevron-right.svg';
import styles from './styles';
import Colors from '../../../../../config/colors';
import {connect, useDispatch} from 'react-redux';
import {
  addFavorite,
  removeFavorite,
} from '../../../../../redux/actions/characters';
import {useNavigation} from '@react-navigation/native';

const CharacterItem = ({character, favoritesList}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const isInFavoritesList = favoritesList.some(
    favorite => favorite.id === character.id,
  );

  const toggleFavorite = () => {
    isInFavoritesList
      ? dispatch(removeFavorite(character))
      : dispatch(addFavorite(character));
  };
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: character.image}} />
      <View style={styles.characterInfo}>
        <Label style={styles.title} textProps={{numberOfLines: 1}}>
          {character.name}
        </Label>
        <Label style={styles.status}>{character.status}</Label>
      </View>
      <View style={styles.itemButtons}>
        <TouchableOpacity style={styles.touchable} onPress={toggleFavorite}>
          <LikeIcon
            fill={isInFavoritesList ? Colors.basicRed : Colors.white}
            height={20}
            width={20}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.seeMoreButton}
          onPress={() => {
            navigation.navigate('Character', {character: character});
          }}>
          <Label style={styles.seeMoreLabel}>Detalle</Label>
          <ChevronRight height={15} width={15} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapStateToProps = store => {
  return {
    favoritesList: store.charactersByPage.favorites,
  };
};

export default connect(mapStateToProps)(CharacterItem);
