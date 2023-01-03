import React from 'react';
import {FlatList, Modal, TouchableOpacity, View} from 'react-native';
import Label from '../../../Label';
import styles from './styles';

const DropdownList = ({
  visible,
  setShowOptions,
  dropdownTop,
  options,
  setFilterValues,
  type,
}) => {
  const handleOnPress = item => {
    setFilterValues(prevState => ({...prevState, [type]: item}));
    setShowOptions(false);
  };

  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => handleOnPress(item)}
      style={styles.touchable}>
      <Label>{item.label}</Label>
    </TouchableOpacity>
  );
  return (
    <Modal visible={visible} transparent>
      <View style={[styles.container, {top: dropdownTop + 5}]}>
        <FlatList
          data={options}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={() => <View style={styles.horizontalLine} />}
        />
      </View>
    </Modal>
  );
};

export default DropdownList;
