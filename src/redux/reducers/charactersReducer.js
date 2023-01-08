const initialState = {
  characters: [],
  characterName: '',
  currentPage: 1,
  species: '',
  gender: '',
  status: '',
  favorites: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CHARACTERS_SUCESS':
      return {
        ...state,
        characters: action.payload.results,
        numberOfPages: action.payload.info.pages,
      };
    case 'GET_CHARACTERS_FAILURE':
      return {
        ...state,
        characters: [],
      };
    case 'CHANGE_CHARACTER_NAME':
      return {
        ...state,
        characterName: action.payload.name,
        currentPage: 1,
      };
    case 'GO_TO_NEXT_PAGE':
      return {
        ...state,
        currentPage: state.currentPage + 1,
      };
    case 'GO_TO_PREVIOUS_PAGE':
      return {
        ...state,
        currentPage: state.currentPage - 1,
      };
    case 'GO_TO_LAST_PAGE':
      return {
        ...state,
        currentPage: state.numberOfPages,
      };
    case 'GO_TO_FIRST_PAGE':
      return {
        ...state,
        currentPage: 1,
      };
    case 'APPLY_FILTERS':
      return {
        ...state,
        species: action.payload.species.value,
        status: action.payload.status.value,
        gender: action.payload.gender.value,
        currentPage: 1,
      };
    case 'ADD_FAVORITE':
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case 'GET_FAVORITES_SUCCESS':
      return {
        ...state,
        favorites: action.payload,
      };
    default:
      return state;
  }
};
