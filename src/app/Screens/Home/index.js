import React, {useEffect} from 'react';
import {FlatList, View} from 'react-native';
import {connect, useDispatch} from 'react-redux';
import {getCharacters} from '../../../redux/actions/characters';
import CharacterItem from './Components/CharacterItem';
import Paginator from './Components/Paginator';
import styles from './styles';

const Home = ({
  charactersList,
  characterName,
  page,
  species,
  gender,
  status,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacters(page, characterName, species, status, gender));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, characterName, species, gender, status]);

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
    species: store.charactersByPage.species,
    status: store.charactersByPage.status,
    gender: store.charactersByPage.gender,
  };
};

export default connect(mapStateToProps)(Home);
