import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { appReducer } from './reducers'
import InitedSettingPage from './AppRedux.js';
import './index.css';

let store = createStore(appReducer)
console.log(store.getState())
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

ReactDOM.render(
  <Provider store={store}>
    <InitedSettingPage />
  </Provider>,
  document.getElementById('root')
);
