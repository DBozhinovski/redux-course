import { createStore, combineReducers } from 'redux';

// Single item reducer
const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case 'TOGGLE_TODO':
      if(state.id !== action.id){
        return state;
      }

      return {
        ...state,
        completed: !state.completed
      };
    default:
      return state;
  }
};

// Multiple item reducer
const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ];
    case 'TOGGLE_TODO':
      return state.map(t => todo(t, action));
    default:
      return state;
  }
};

// Filtering, reducer composition with objects
const visibilityFilter = (
  state = 'SHOW_ALL',
  action
) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};

// Mothership reducer
// const todoApp = (state = {}, action) => {
//   return {
//     todos: todos(
//       state.todos,
//       action
//     ),
//     visibilityFilter: visibilityFilter(
//       state.visibilityFilter,
//       action
//     )
//   };
// };
// Or, a less verbose variation of the above, built int redux:
const todoApp = combineReducers({
  // es6 magic: if key name = value name
  // no need to specify both :D
  todos,
  visibilityFilter
});

const store = createStore(todoApp);
console.log('Initial state:', store.getState());

store.dispatch({
  type: 'ADD_TODO',
  id: 0,
  text: 'Learn Redux'
});
console.log('State after ADD_TODO:', store.getState());

store.dispatch({
  type: 'TOGGLE_TODO',
  id: 0
});
console.log('State after TOGGLE_TODO:', store.getState());

store.dispatch({
  type: 'SET_VISIBILITY_FILTER',
  filter: 'SHOW_COMPLETED'
});
console.log('State after SET_VISIBILITY_FILTER:', store.getState());
