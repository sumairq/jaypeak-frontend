import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import toursReducer from './tours/toursReducer';

const rootReducer = combineReducers({
  toursReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, logger)));

export default store;
