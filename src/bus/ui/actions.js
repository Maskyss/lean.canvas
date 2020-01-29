import { types } from './types';

export const actionsSpinner = {
	startSpinner: () => ({
		type: types.START_SPINNING,
	}),
	stopSpinner: () => ({
		type: types.STOP_SPINNING,
	}),
};
