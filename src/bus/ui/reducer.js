import { Map } from 'immutable';

import { types } from './types';

const initialState = Map({
	spinnerAction: false,
});

export const spinnerReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.START_SPINNING:
			return state.set('spinnerAction', true);
		case types.STOP_SPINNING:
			return state.set('spinnerAction', false);
		default:
			return state;
	}
};
