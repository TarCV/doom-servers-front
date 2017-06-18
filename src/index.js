// Needed for redux-saga es6 generator support
import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

// TODO: remove from production
import { composeWithDevTools } from 'redux-devtools-extension';
import { DockableSagaView, createSagaMonitor } from 'redux-saga-devtools';

import 'bootstrap/dist/css/bootstrap.css';

import App from './pages/App';
import { appReducer } from './reducers';

import rootSaga from './sagas';

const monitor = createSagaMonitor();
const sagaMiddleware = createSagaMiddleware({ sagaMonitor: monitor });
const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsBlacklist, actionsCreators and other options if needed
});

const store = createStore(
  appReducer,
  composeEnhancers(
    applyMiddleware(sagaMiddleware)
  )
);

sagaMiddleware.run(rootSaga);

render((
  <div>
    <Provider store={store}>
      <App />
    </Provider>
    <DockableSagaView monitor={monitor} />
  </div>
), document.getElementById('root'));

render();
store.subscribe(render);
