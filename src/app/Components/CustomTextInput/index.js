import React from 'react';
import {TextInput, View} from 'react-native';
import styles from './styles';

const CustomTextInput = ({
  placeholder,
  onBlur,
  onChange,
  value,
  Icon,
  error,
  readOnly = false,
}) => {
  return (
    <View style={[styles.container, error && styles.error]}>
      {Icon && <Icon width={20} height={20} style={styles.icon} />}
      <TextInput
        placeholder={placeholder}
        onBlur={onBlur}
        onChangeText={onChange}
        value={value}
        style={styles.text}
        editable={!readOnly}
      />
    </View>
  );
};

export default CustomTextInput;
