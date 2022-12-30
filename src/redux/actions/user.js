import AsyncStorage from '@react-native-async-storage/async-storage';

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
