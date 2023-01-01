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
  iconProps,
  onSubmitEditing,
}) => {
  return (
    <View style={[styles.container, error && styles.error]}>
      {Icon && (
        <Icon width={20} height={20} style={styles.icon} {...iconProps} />
      )}
      <TextInput
        placeholder={placeholder}
        onBlur={onBlur}
        onChangeText={onChange}
        value={value}
        style={styles.text}
        editable={!readOnly}
        onSubmitEditing={onSubmitEditing}
      />
    </View>
  );
};

export default CustomTextInput;
