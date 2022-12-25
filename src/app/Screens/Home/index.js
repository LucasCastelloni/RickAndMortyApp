import React, {useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';
import {connect, useDispatch} from 'react-redux';
import {getCharacters} from '../../../redux/actions/characters';

const Home = ({charactersList}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCharacters(1));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const renderItem = ({item}) => (
    <View>
      <Text>{item.name}</Text>
    </View>
  );
  return (
    <View>
      <Text>Home</Text>
      <FlatList
        data={charactersList?.charactersByPage?.characters}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const mapStateToProps = store => {
  return {
    charactersList: store,
  };
};

export default connect(mapStateToProps)(Home);
