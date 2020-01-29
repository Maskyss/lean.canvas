import { call, takeEvery, all } from 'redux-saga/effects';

import { types } from '../types';
import { login } from './workers';

function* loginWatcher() {
	yield takeEvery(types.LOGIN_ASYNC, login);
}

export function* watchAuth() {
	yield all([call(loginWatcher)]);
}
