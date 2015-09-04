import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore.js';
import Layout from './Layout.js';
import Content from '../component/Content.js';

const store = configureStore();

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
          <Layout/>
      </Provider>
    );
  }
}
