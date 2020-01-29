import { put, apply } from 'redux-saga/effects';
import { actionsCard } from '../../actions';
import uuid from "uuid";

export function* getData() {
	try {
		const cardList = JSON.parse(	localStorage.getItem('cardList'))
		yield put(actionsCard.setList(cardList))		
	} catch (err) {
		console.log( err);
	} 
}
