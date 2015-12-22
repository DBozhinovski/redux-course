import { createStore, combineReducers } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';

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
const todoApp = combineReducers({
  todos,
  visibilityFilter
});
const store = createStore(todoApp);

const TodoApp = React.createClass({
  render: function(){
    return (
      <div>
        <input ref={node => {
          this.input = node;
        }} />
        <button
          onClick={() => {
            store.dispatch({
              type: 'ADD_TODO',
              text: this.input.value,
              id: new Date().getTime()
            });
            this.input.value = '';
          }}
        >
          Add Todo
        </button>
        <ul>
          {this.props.todos.map(_todo =>
            <li key={_todo.id}
                onClick={() => {
                  store.dispatch({
                    type: 'TOGGLE_TODO',
                    id: _todo.id
                  });
                }}
                style={{
                  textDecoration:
                    _todo.completed ?
                     'line-through' :
                     'none'
                }}
            >
              {_todo.text}
            </li>
          )}
        </ul>
      </div>
    );
  }
});

const render = () => {
  ReactDOM.render(
    <TodoApp
      todos={store.getState().todos}
    />,
    document.getElementById('root')
  );
};

store.subscribe(render);
render();
