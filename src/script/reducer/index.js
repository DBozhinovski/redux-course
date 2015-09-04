import * as ActionTypes from '../action/index.js';
import { combineReducers } from 'redux';

const initialState = {
  results: [],
};

export function search(state = initialState, action) {
  switch (action.type) {
  case ActionTypes.ARTIST_SUCCESS:
    return Object.assign({}, state, {
        results: action.response,
      }
    );
  default:
    return state;
  }
}
const rootReducer = combineReducers({
  search
});
export default rootReducer;
