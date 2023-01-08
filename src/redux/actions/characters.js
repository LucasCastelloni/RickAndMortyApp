import AsyncStorage from '@react-native-async-storage/async-storage';
import {getCharactersByPage} from '../../services/charactersByPage';

export const getCharactersSucess = payload => {
  return {
    type: 'GET_CHARACTERS_SUCESS',
    payload,
  };
};

export const getCharactersFailure = () => {
  return {
    type: 'GET_CHARACTERS_FAILURE',
  };
};

export const getCharacters =
  (pageNumber, characterName, species, status, gender) => async dispacth => {
    dispacth({type: 'GET_CHARACTERS'});
    const response = await getCharactersByPage(
      pageNumber,
      characterName,
      species,
      status,
      gender,
    );
    if (response.data.error) {
      dispacth(getCharactersFailure());
    } else {
      dispacth(
        getCharactersSucess({
          ...response?.data,
        }),
      );
    }
  };

export const changeCharacterName = name => {
  return {
    type: 'CHANGE_CHARACTER_NAME',
    payload: {name: name},
  };
};

export const goToNextCharacterPage = () => {
  return {
    type: 'GO_TO_NEXT_PAGE',
  };
};

export const goToPreviousCharacterPage = () => {
  return {
    type: 'GO_TO_PREVIOUS_PAGE',
  };
};

export const goToFirstPage = () => {
  return {
    type: 'GO_TO_FIRST_PAGE',
  };
};

export const goToLastPage = () => {
  return {
    type: 'GO_TO_LAST_PAGE',
  };
};

export const applyFiltersValues = payload => {
  return {
    type: 'APPLY_FILTERS',
    payload,
  };
};

export const addFavorite = payload => async (dispatch, getState) => {
  await dispatch({
    type: 'ADD_FAVORITE',
    payload,
  });
  const favorites = getState().charactersByPage.favorites;
  try {
    const jsonValue = JSON.stringify(favorites);
    await AsyncStorage.setItem('@favorites', jsonValue);
  } catch (error) {}
};

const getFavoritesSuccess = payload => {
  return {
    type: 'GET_FAVORITES_SUCCESS',
    payload,
  };
};

export const getFavorites = () => async dispatch => {
  dispatch({type: 'GET_FAVORITES'});
  const jsonValue = await AsyncStorage.getItem('@favorites');
  if (jsonValue != null) {
    dispatch(getFavoritesSuccess(JSON.parse(jsonValue)));
  }
};

export const removeFavorite = payload => async (dispatch, getState) => {
  await dispatch({
    type: 'REMOVE_FAVORITE',
    payload,
  });
  const favorites = getState().charactersByPage.favorites;
  try {
    const jsonValue = JSON.stringify(favorites);
    await AsyncStorage.setItem('@favorites', jsonValue);
  } catch (error) {}
};
