import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {connect} from 'react-redux';
import FavoriteCharacterItem from './Components/FavoriteCharacterItem';

const Favorites = ({favoritesList}) => {
  const renderItem = ({item}) => <FavoriteCharacterItem character={item} />;
  return (
    <View>
      <FlatList
        data={favoritesList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        //style={styles.innerContainer}
        bounces={false}
        //contentContainerStyle={styles.scrollContainer}
      />
    </View>
  );
};

const mapStateToProps = store => {
  return {
    favoritesList: store.charactersByPage.favorites,
  };
};

export default connect(mapStateToProps)(Favorites);
