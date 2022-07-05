import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import toursReducer from './tours/toursReducer';
import bookingsReducer from './bookings/bookingsReducer';

const rootReducer = combineReducers({
  toursReducer,
  bookingsReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, logger)));

export default store;
