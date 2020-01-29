import { applyMiddleware, compose } from 'redux';
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux';

import { createLogger } from 'redux-logger';

import createSagaMiddleware from 'redux-saga';

import { createBrowserHistory } from 'history';

const __DEV__ = process.env.NODE_ENV === 'development';

const history = createBrowserHistory();
const routerMiddleware = createRouterMiddleware(history);
const sagaMiddleware = createSagaMiddleware();

const logger = createLogger({
	duration: true,
	collapsed: true,
});

const devTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const composeEnhancers = __DEV__ && devTools ? devTools : compose;

const middleware = [sagaMiddleware, routerMiddleware];

if (__DEV__) {
	middleware.push(logger);
}

const enhancedStore = composeEnhancers(applyMiddleware(...middleware));
export { history, enhancedStore, sagaMiddleware };
