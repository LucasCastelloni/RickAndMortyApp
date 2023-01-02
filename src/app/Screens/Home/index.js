import React, {useEffect} from 'react';
import {FlatList, View} from 'react-native';
import {connect, useDispatch} from 'react-redux';
import {getCharacters} from '../../../redux/actions/characters';
import CharacterItem from './Components/CharacterItem';
import Paginator from './Components/Paginator';
import styles from './styles';

const Home = ({charactersList, characterName, page}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacters(page, characterName));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, characterName]);

  const renderItem = ({item}) => <CharacterItem character={item} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={charactersList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={3}
        style={styles.innerContainer}
        bounces={false}
        contentContainerStyle={styles.scrollContainer}
      />
      <Paginator />
    </View>
  );
};

const mapStateToProps = store => {
  return {
    charactersList: store.charactersByPage.characters,
    numberOfPages: store.charactersByPage?.numberOfPages,
    characterName: store.charactersByPage.characterName,
    page: store.charactersByPage.currentPage,
  };
};

export default connect(mapStateToProps)(Home);
