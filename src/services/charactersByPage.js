import api from '../config/api';

export const getCharactersByPage = (
  pageNumber,
  name,
  species,
  status,
  gender,
) =>
  api.get('/character', {
    page: pageNumber,
    name: name,
    species: species,
    status: status,
    gender: gender,
  });
