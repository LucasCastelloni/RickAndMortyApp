const initialState = {
  characters: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CHARACTERS_SUCESS':
      return {
        characters: action.payload.results,
      };
    case 'GET_CHARACTERS_FAILURE':
      return {
        characters: [],
      };
    default:
      return state;
  }
};
