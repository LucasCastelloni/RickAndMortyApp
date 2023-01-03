import React, {useState} from 'react';
import {Modal, View} from 'react-native';
import ExitButton from '../ExitButton';
import Label from '../Label';
import FilterButton from './Components/FilterButton';
import {
  FILTER_SETTINGS,
  genderOptions,
  speciesOptions,
  statusOptions,
} from './constants';
import styles from './styles';

const CustomFilterModal = ({visible, handleCloseModal}) => {
  const [filterValues, setFilterValues] = useState({
    species: speciesOptions[0],
    status: statusOptions[0],
    gender: genderOptions[0],
  });
  return (
    <Modal visible={visible} transparent={true}>
      <View style={styles.modalBackground}>
        <View style={styles.container}>
          <View style={styles.exitButton}>
            <ExitButton onPress={handleCloseModal} />
          </View>
          <Label style={styles.title}>Filtros</Label>
          {FILTER_SETTINGS.map(filter => (
            <View key={filter.id} style={styles.filterButton}>
              <FilterButton
                label={filter.label}
                options={filter.options}
                filterValues={filterValues}
                setFilterValues={setFilterValues}
                type={filter.type}
              />
            </View>
          ))}
        </View>
      </View>
    </Modal>
  );
};

export default CustomFilterModal;
