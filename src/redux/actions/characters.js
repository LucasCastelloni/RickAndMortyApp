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

export const getCharacters = (pageNumber, characterName) => async dispacth => {
  dispacth({type: 'GET_CHARACTERS'});
  const response = await getCharactersByPage(pageNumber, characterName);
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
