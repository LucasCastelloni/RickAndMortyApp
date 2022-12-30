const initialState = {
  user: null,
  userLoading: false,
  userError: false,
  getUserLoading: false,
  isUserLogged: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_USER_DATA':
      return {
        ...state,
        userLoading: true,
      };
    case 'SAVE_USER_DATA_SUCCESS':
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
    case 'GET_USER_DATA':
      return {
        ...state,
        getUserLoading: true,
      };
    case 'GET_USER_DATA_SUCCESS':
      return {
        ...state,
        getUserLoading: false,
        isUserLogged: true,
        user: {...action.payload},
      };
    case 'GET_USER_DATA_FAILURE':
      return {
        ...state,
        getUserLoading: false,
      };
    default:
      return state;
  }
};
