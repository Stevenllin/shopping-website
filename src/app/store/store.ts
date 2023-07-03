import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import { routerHistory } from '../core/router/service';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

// Create Middleware
const reduxSagaMiddleware = createSagaMiddleware();
const reduxRouterMiddleware = routerMiddleware(routerHistory);
const appReduxMiddlewares = applyMiddleware(reduxSagaMiddleware, reduxRouterMiddleware);

// Create rootMiddleware based on environment
let rootMiddleware;
if (process.env.NODE_ENV !== 'production') {
  // non-prod env
  const { composeWithDevTools } = require('redux-devtools-extension');
  rootMiddleware = composeWithDevTools(appReduxMiddlewares);
} else {
  // prod env
  rootMiddleware = appReduxMiddlewares;
}

// Create store
const store = createStore(rootReducer, rootMiddleware);

// Run saga
reduxSagaMiddleware.run(rootSaga);

export default store;
