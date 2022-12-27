import React, {useEffect, useState} from 'react';
import {FlatList, StatusBar, Text, View} from 'react-native';
import {connect, useDispatch} from 'react-redux';
import Colors from '../../../config/colors';
import {getCharacters} from '../../../redux/actions/characters';
import CharacterItem from './Components/CharacterItem';
import Paginator from './Components/Paginator';
import styles from './styles';

const Home = ({charactersList, numberOfPages}) => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  useEffect(() => {
    dispatch(getCharacters(page));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const renderItem = ({item}) => <CharacterItem character={item} />;

  const nextPage = () => {
    setPage(prevState => prevState + 1);
  };

  const prevPage = () => {
    setPage(prevState => prevState - 1);
  };

  const goToLastPage = () => {
    setPage(numberOfPages);
  };

  const goToFirstPage = () => {
    setPage(1);
  };

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
      <Paginator
        page={page}
        nextPage={nextPage}
        prevPage={prevPage}
        goToFirstPage={goToFirstPage}
        goToLastPage={goToLastPage}
        numberOfPages={numberOfPages}
      />
    </View>
  );
};

const mapStateToProps = store => {
  return {
    charactersList: store.charactersByPage?.characters,
    numberOfPages: store.charactersByPage?.numberOfPages,
  };
};

export default connect(mapStateToProps)(Home);
