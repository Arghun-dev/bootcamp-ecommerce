import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const isServer = typeof window === 'undefined';
const isDev = process.env.NODE_ENV === 'development';

// add redux devtools (only in browser and in dev mode)
const composeEnhancers =
  (isDev && !isServer && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || // eslint-disable-line no-underscore-dangle
  compose;

// add middlewares
const createStoreWithMiddleware = composeEnhancers(applyMiddleware(thunk))(
  createStore,
);

// create store
export const store = createStoreWithMiddleware(rootReducer);
