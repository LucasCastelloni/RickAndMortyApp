import {createStore, combineReducers, applyMiddleware} from 'redux';
import charactersReducer from './reducers/charactersReducer';
import thunk from 'redux-thunk';
import userReducer from './reducers/userReducer';

const rootReducer = combineReducers({
  charactersByPage: charactersReducer,
  user: userReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
