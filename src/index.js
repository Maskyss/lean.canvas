import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './core/App';
import * as serviceWorker from './serviceWorker';

import { store } from './bus/init/store';

import { history } from './bus/init/middleware';

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<App />
		</Router>
	</Provider>,
	document.getElementById('root'),
);

serviceWorker.unregister();
