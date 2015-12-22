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

// Dummy filtering component
const FilterLink = ({
  filter,
  currentFilter,
  children
}) => {
  if(filter === currentFilter){
    return <span>{children}</span>;
  }

  return (
    <a href='#'
      onClick={ e => {
        e.preventDefault();
        store.dispatch({
          type: 'SET_VISIBILITY_FILTER',
          filter
        });
      }}
    >
      {children} {/* This thing here is what is inside the tag below! */}
    </a>
  );
};

// Get visible todos by filter
const getVisibleTodos = (
  _todos,
  filter
) => {
  switch (filter) {
    case 'SHOW_ALL': return _todos;
    case 'SHOW_COMPLETED': return _todos.filter(t => t.completed);
    case 'SHOW_ACTIVE': return _todos.filter(t => !t.completed);
  }
};

const TodoApp = React.createClass({
  render: function(){
    const {
      todos, //eslint-disable-line no-shadow
      visibilityFilter //eslint-disable-line no-shadow
    } = this.props;

    const visibleTodos = getVisibleTodos(
      todos,
      visibilityFilter
    );

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
          {visibleTodos.map(_todo =>
            <li key={_todo.id}
                onClick={() => {
                  store.dispatch({
                    type: 'TOGGLE_TODO', // Subscribing to toggle here, just like in the previous example
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
        {/* Using a bunch of dummy components here: */}
        <p>Show: {' '}
          <FilterLink
            filter='SHOW_ALL'
            currentFilter={visibilityFilter}
          > {/* They can behave exactly like regular tags: */}
            All
          </FilterLink> {' '}
          <FilterLink
            filter='SHOW_ACTIVE'
            currentFilter={visibilityFilter}
          >
            Active
          </FilterLink> {' '}
          <FilterLink
            filter='SHOW_COMPLETED'
            currentFilter={visibilityFilter}
          >
            Completed
          </FilterLink>
        </p>
      </div>
    );
  }
});

const render = () => {
  ReactDOM.render(
    <TodoApp
      {...store.getState()}
    />,
    document.getElementById('root')
  );
};

store.subscribe(render);
render();
