import { all, call } from 'redux-saga/effects';

import { watchCardData } from '../card/saga/watchers';
import { watchAuth } from '../auth/saga/watchers';



export function* rootSaga() {
	yield all([ call(watchCardData), 
		call(watchAuth)]);
		
}
