import { put, apply } from 'redux-saga/effects';
import { actionsSpinner } from '../../../ui/actions';

import { Api } from '../../../../REST/api';
import { actionsAuth } from '../../actions';

//apply виклик функції з заданим контекстом
//(контекст, функція, масив арг)
//...
//...
//put виклик dispatch action (виклик action)

export function* login({ payload }) {
	try {
		yield put(actionsSpinner.startSpinner());

		const response = yield apply(Api, Api.auth.login, [payload]);

		const data = yield apply(response, response.json);

		if (response.status !== 200) {
			throw new Error(data.error);
		}

		const { token, refreshToken } = data.tokens;
		yield apply(localStorage, localStorage.setItem, ['token', token]);
		yield apply(localStorage, localStorage.setItem, ['refreshToken', refreshToken]);
		yield put(actionsAuth.authenticate(true))


	} catch (err) {
		console.log('loginWorker', err);
	} finally {
		yield put(actionsSpinner.stopSpinner());
	}
}
