import React from 'react';
import {Controller} from 'react-hook-form';
import {View} from 'react-native';
import CustomTextInput from '../CustomTextInput';
import Label from '../Label';
import styles from './styles';
import AlertIcon from '../../Assets/svg/alert-icon.svg';

const CustomTextField = ({
  control,
  name,
  placeholder,
  Icon,
  rules = {},
  title,
  readOnly,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {onChange, onBlur, value}, fieldState: {error}}) => (
        <View>
          {title && (
            <Label style={{...styles.title, ...(error && styles.error)}}>
              {title}
            </Label>
          )}
          <CustomTextInput
            placeholder={placeholder}
            onBlur={onBlur}
            onChange={onChange}
            value={value}
            Icon={Icon}
            error={error}
            readOnly={readOnly}
          />
          <View style={styles.errorContainer}>
            {error?.message && (
              <>
                <AlertIcon height={14} width={14} />
                <Label style={styles.errorLabel}>{error?.message}</Label>
              </>
            )}
          </View>
        </View>
      )}
    />
  );
};

export default CustomTextField;
