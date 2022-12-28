import React from 'react';
import {TouchableOpacity} from 'react-native';
import Label from '../Label';
import styles from './styles';

const CustomButton = ({containerStyle, label, onPress, disabled = false}) => {
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle, disabled && styles.disabled]}
      onPress={onPress}
      disabled={disabled}>
      <Label style={styles.label}>{label}</Label>
    </TouchableOpacity>
  );
};

export default CustomButton;
