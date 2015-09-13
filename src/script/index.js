import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './container/Layout.js';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore.js';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
      <Layout/>
  </Provider>,
  document.getElementById('root')
);
