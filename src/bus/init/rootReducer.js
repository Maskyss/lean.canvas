import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { authReducer } from '../auth/reducer';
import { spinnerReducer } from '../ui/reducer';
import { updateCardReducer } from '../card/reducer';



export const rootReducer = combineReducers({
	routerReducer,
	spinnerReducer,
	authReducer,
	updateCardReducer,
});
