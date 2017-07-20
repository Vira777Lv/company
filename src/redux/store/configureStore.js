import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';

import rootReducer from '../reducers/rootReducer.js';

const middleware = [thunk, createLogger({collapsed: true, duration: true})];

const enhancer = compose(
  applyMiddleware(...middleware),
);

function configureStore() {
  const store = createStore(rootReducer, {}, enhancer);
  if (module.hot) {
    module.hot.accept('../reducers/rootReducer', () => {
      const nextRootReducer = require('../reducers/rootReducer').default;
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}

export default configureStore;
