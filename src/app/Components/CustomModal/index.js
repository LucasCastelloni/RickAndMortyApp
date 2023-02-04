import React from 'react';
import {Modal, View} from 'react-native';
import Colors from '../../../config/colors';
import ExitButton from '../ExitButton';
import Label from '../Label';
import styles from './styles';

const CustomModal = ({visible, handleCloseModal, children, title, Icon}) => {
  return (
    <Modal visible={visible} transparent={true}>
      <View style={styles.modalBackground}>
        <View style={styles.container}>
          <View style={styles.exitButton}>
            <ExitButton onPress={handleCloseModal} />
          </View>
          {Icon && (
            <Icon
              height={25}
              width={25}
              fill={Colors.basicGreen}
              style={styles.icon}
            />
          )}
          <Label style={styles.title}>{title}</Label>
          {children}
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;
