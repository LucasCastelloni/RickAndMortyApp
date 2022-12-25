import {create} from 'apisauce';

const api = create({
  baseURL: 'https://rickandmortyapi.com/api',
});

export default api;
