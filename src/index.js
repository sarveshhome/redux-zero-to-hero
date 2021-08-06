import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import store from './store/index';
import { Provider } from 'react-redux';

//Store - Globalized state

//Action - Increment

//Reducer -

//Dispatch
//dispatch is a function of the Redux store. You call store.dispatch to dispatch an action. This is the only way to trigger a state change.

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
