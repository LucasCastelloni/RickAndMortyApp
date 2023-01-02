import React from 'react';
import {Modal, View} from 'react-native';
import ExitButton from '../ExitButton';
import Label from '../Label';
import styles from './styles';

const CustomFilterModal = ({visible, handleCloseModal}) => {
  return (
    <Modal visible={visible} transparent={true}>
      <View style={styles.modalBackground}>
        <View style={styles.container}>
          <View style={styles.exitButton}>
            <ExitButton onPress={handleCloseModal} />
          </View>
          <Label style={styles.container}> Filtro </Label>
        </View>
      </View>
    </Modal>
  );
};

export default CustomFilterModal;
