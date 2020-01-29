import { all, call } from 'redux-saga/effects';

import { watchAuth } from '../auth/saga/watchers';
import { watchCardData } from '../card/saga/watchers';


export function* rootSaga() {
	yield all([call(watchAuth),  call(watchCardData)]);
}
