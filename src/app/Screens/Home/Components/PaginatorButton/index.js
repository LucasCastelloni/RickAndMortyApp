import React from 'react';
import {TouchableOpacity} from 'react-native';

import styles from './styles';

const PaginatorButton = ({Icon, onPress, disabled}) => {
  return (
    <TouchableOpacity
      style={{...styles.container, ...(disabled && styles.disabled)}}
      onPress={onPress}
      disabled={disabled}>
      <Icon width={20} height={20} />
    </TouchableOpacity>
  );
};

export default PaginatorButton;
