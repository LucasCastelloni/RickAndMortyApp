import api from '../config/api';

export const getCharactersByPage = (pageNumber, name) =>
  api.get('/character', {page: pageNumber, name: name});
