import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { updateCardReducer } from '../card/reducer';
import { updateAuthReducer } from '../auth/reducer';




export const rootReducer = combineReducers({
	routerReducer,
	updateCardReducer,
	updateAuthReducer
});
