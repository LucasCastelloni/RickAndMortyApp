import React from 'react';
import {useForm} from 'react-hook-form';
import {Image, View} from 'react-native';
import {connect} from 'react-redux';
import {saveUserData} from '../../../redux/actions/user';
import CustomButton from '../../Components/CustomButton';
import CustomTextField from '../../Components/CustomTextField';
import Label from '../../Components/Label';
import {FIELDS} from './constants';
import styles from './styles';

const Login = ({dispatch, navigation}) => {
  const {control, handleSubmit} = useForm({});

  const onSubmitForm = async data => {
    dispatch(saveUserData(data, navigation));
  };

  return (
    <View>
      <Image
        source={require('../../Assets/images/archivo.png')}
        style={styles.image}
      />
      <View style={styles.titleContainer}>
        <Label style={styles.title}>Bienvenido</Label>
        <Label style={styles.subtitle}>Inicia Sesión</Label>
      </View>
      <View style={styles.fieldsContainer}>
        {FIELDS.map(field => (
          <View key={field.id} style={styles.field}>
            <CustomTextField
              control={control}
              name={field.name}
              Icon={field.Icon}
              rules={field.rules}
              title={field.title}
            />
          </View>
        ))}
      </View>
      <CustomButton
        label={'Iniciar Sesión'}
        onPress={handleSubmit(onSubmitForm)}
        containerStyle={styles.button}
      />
    </View>
  );
};

export default connect()(Login);
