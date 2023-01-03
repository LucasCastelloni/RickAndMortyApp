import api from '../config/api';

export const getCharactersByPage = (pageNumber, name, species) =>
  api.get('/character', {page: pageNumber, name: name, species: species});
