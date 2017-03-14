import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import Table from './components/Table';
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <Table />
  </Provider>,
  document.getElementById('root')
);
