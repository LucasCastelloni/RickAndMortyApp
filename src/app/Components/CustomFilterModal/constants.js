export const speciesOptions = [
  {label: 'Todas', value: ''},
  {label: 'Humano', value: 'human'},
  {label: 'Humanoide', value: 'humanoid'},
  {label: 'Alien', value: 'alien'},
  {label: 'Poopybutthole', value: 'Poopybutthole'},
  {label: 'Criatura Mitologica', value: 'Mythological Creature'},
  {label: 'Enfermedad', value: 'Disease'},
  {label: 'Desconocida', value: 'unknown'},
];

export const statusOptions = [
  {label: 'Cualquiera', value: ''},
  {label: 'Vivo', value: 'alive'},
  {label: 'Muerto', value: 'dead'},
  {label: 'Desconocido', value: 'unknown'},
];

export const genderOptions = [
  {label: 'Todos', value: ''},
  {label: 'Masculino', value: 'male'},
  {label: 'Femenino', value: 'female'},
  {label: 'No binario', value: 'genderless'},
  {label: 'Desconocido', value: 'unknown'},
];

export const FILTER_SETTINGS = [
  {
    type: 'species',
    label: 'Especies',
    options: speciesOptions,
    id: 1,
  },
  {
    type: 'status',
    label: 'Status',
    options: statusOptions,
    id: 2,
  },
  {
    type: 'gender',
    label: 'Genero',
    options: genderOptions,
    id: 3,
  },
];
