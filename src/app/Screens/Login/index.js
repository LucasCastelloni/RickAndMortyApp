import {GoogleSignin} from '@react-native-google-signin/google-signin';
import i18next from 'i18next';
import React, {useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {Image, ScrollView, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import {saveUserData, signInWithGoogle} from '../../../redux/actions/user';
import CustomButton from '../../Components/CustomButton';
import CustomTextField from '../../Components/CustomTextField';
import Label from '../../Components/Label';
import {FIELDS} from './constants';
import styles from './styles';
import GoogleIcon from '../../Assets/svg/google-icon.svg';

const Login = ({dispatch, navigation}) => {
  const {control, handleSubmit} = useForm({});

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '632439179812-s78vmkns52598anlj1ommpakdnaunk4m.apps.googleusercontent.com',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        <Label style={styles.title}>{i18next.t('Login:welcome')}</Label>
        <Label style={styles.subtitle}>{i18next.t('Login:subtitle')}</Label>
      </View>
      <ScrollView bounces={false}>
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
          label={i18next.t('Login:signIn')}
          onPress={handleSubmit(onSubmitForm)}
          containerStyle={styles.button}
        />
        <View style={styles.hline} />
        <View style={styles.socialContainer}>
          <Label style={styles.socialLabel}>Iniciar sesión con:</Label>
          <TouchableOpacity
            onPress={() => {
              dispatch(signInWithGoogle(navigation));
            }}
            style={styles.googleIcon}>
            <GoogleIcon width={45} height={45} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default connect()(Login);
