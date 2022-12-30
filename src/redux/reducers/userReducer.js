const initialState = {
  user: null,
  userLoading: false,
  userError: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_USER_DATA':
      return {
        ...state,
        userLoading: true,
      };
    case 'SAVE_USER_DATA_SUCCES':
      return {
        ...state,
        userLoading: false,
        user: {...action.payload},
      };
    case 'SAVE_USER_DATA_FAILURE':
      return {
        ...state,
        userLoading: false,
      };
    default:
      return state;
  }
};
