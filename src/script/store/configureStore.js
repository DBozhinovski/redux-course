import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import apiMiddleware from '../middleware/spotify-api.js';
import createLogger from 'redux-logger';
import rootReducer from '../reducer/index.js';

const loggerMiddleware = createLogger({
  level: 'info',
  collapsed: true
});
const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  apiMiddleware,
  loggerMiddleware
)(createStore);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState);
}
