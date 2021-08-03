import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import store from './store/index';
import { Provider } from 'react-redux';

//Store - Globalized state

//Action - Increment

//Reducer -

//Dispatch


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
