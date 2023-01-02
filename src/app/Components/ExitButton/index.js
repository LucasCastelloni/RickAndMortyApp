import React from 'react';
import {TouchableOpacity} from 'react-native';
import styles from './styles';
import CrossIcon from '../../Assets/svg/cross-icon.svg';
import Colors from '../../../config/colors';

const ExitButton = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <CrossIcon height={15} width={15} fill={Colors.lightGray} />
    </TouchableOpacity>
  );
};

export default ExitButton;
