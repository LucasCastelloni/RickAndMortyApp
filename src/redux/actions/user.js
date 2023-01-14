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
  try {
    const googleUserInfo = await GoogleSignin.signInSilently();
    if (googleUserInfo) {
      const googleUserData = googleUserInfo.user;
      dispatch(
        getUserSuccess({
          firstName: googleUserData.givenName,
          lastName: googleUserData.familyName,
          email: googleUserData.email,
        }),
      );
    } else {
      const jsonValue = await AsyncStorage.getItem('@user_data');
      const userData = jsonValue != null ? JSON.parse(jsonValue) : null;
      if (userData) {
        dispatch(getUserSuccess(userData));
      } else {
        dispatch(getUserFailure());
      }
    }
  } catch (e) {
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
