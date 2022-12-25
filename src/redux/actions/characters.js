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

export const getCharacters = pageNumber => async dispacth => {
  dispacth({type: 'GET_CHARACTERS'});
  const response = await getCharactersByPage(pageNumber);
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
