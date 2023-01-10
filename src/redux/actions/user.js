import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const saveUserSuccess = payload => {
  return {
    type: 'SAVE_USER_DATA_SUCCESS',
    payload,
  };
};

const saveUserFailure = () => {
  return {
    type: 'SAVE_USER_DATA_FAILURE',
  };
};

export const saveUserData =
  (data, navigation) => async (dispatch, getState) => {
    dispatch({type: 'SAVE_USER_DATA'});
    try {
      const jsonValue = JSON.stringify(data);
      await AsyncStorage.setItem('@user_data', jsonValue);
      await dispatch(saveUserSuccess(data));
      navigation.replace('Dashboard');
    } catch (e) {
      dispatch(saveUserFailure());
    }
  };

const getUserSuccess = payload => {
  return {
    type: 'GET_USER_DATA_SUCCESS',
    payload,
  };
};

const getUserFailure = () => {
  return {
    type: 'GET_USER_DATA_FAILURE',
  };
};

export const getUserData = () => async dispatch => {
  dispatch({type: 'GET_USER_DATA'});
  const jsonValue = await AsyncStorage.getItem('@user_data');
  const userData = jsonValue != null ? JSON.parse(jsonValue) : null;
  if (userData) {
    dispatch(getUserSuccess(userData));
  } else {
    dispatch(getUserFailure());
  }
};

export const signInWithGoogle = navigation => async dispatch => {
  // Check if your device supports Google Play
  await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
  // Get the users ID token
  const {idToken} = await GoogleSignin.signIn();
  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  // Sign-in the user with the credential
  const data = await auth().signInWithCredential(googleCredential);
  const additionalUserInfo = data.additionalUserInfo.profile;
  const userData = {
    firstName: additionalUserInfo.given_name,
    lastName: additionalUserInfo.family_name,
    email: additionalUserInfo.email,
  };
  await dispatch(saveUserSuccess(userData));
  navigation.replace('Dashboard');
};

/* const userdata = {
  additionalUserInfo: {
    isNewUser: false,
    profile: {
      aud: '632439179812-s78vmkns52598anlj1ommpakdnaunk4m.apps.googleusercontent.com',
      azp: '632439179812-9c83l15ufj3o2lv2v7j6epftqrmum5pk.apps.googleusercontent.com',
      email: 'lucas.castelloni@hotmail.com',
      email_verified: true,
      exp: 1673375371,
      family_name: 'Castelloni',
      given_name: 'Lucas',
      iat: 1673371771,
      iss: 'https://accounts.google.com',
      locale: 'en',
      name: 'Lucas Castelloni',
      picture:
        'https://lh3.googleusercontent.com/a/AEdFTp6bMpwQ0DmVSDHcKqQnrFJFzaXCixloVsmh1h8b=s96-c',
      sub: '110119637462039611862',
    },
    providerId: 'google.com',
  },
  user: {
    displayName: 'Lucas Castelloni',
    email: 'lucas.castelloni@hotmail.com',
    emailVerified: true,
    isAnonymous: false,
    metadata: [Object],
    multiFactor: [Object],
    phoneNumber: null,
    photoURL:
      'https://lh3.googleusercontent.com/a/AEdFTp6bMpwQ0DmVSDHcKqQnrFJFzaXCixloVsmh1h8b=s96-c',
    providerData: [Array],
    providerId: 'firebase',
    tenantId: null,
    uid: 'IES95Bwdidc7ovpJo0kaC6JdRrg2',
  },
}; */
