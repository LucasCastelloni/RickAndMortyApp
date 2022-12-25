import {createStore, combineReducers, applyMiddleware} from 'redux';
import charactersReducer from './reducers/charactersReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({charactersByPage: charactersReducer});

export const store = createStore(rootReducer, applyMiddleware(thunk));
