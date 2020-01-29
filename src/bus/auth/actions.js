import { types } from './types';

export const actionsAuth = {
	authenticate: () => ({
		type: types.AUTHENTICATE,
	}),
	login: (payload) => ({
		type: types.LOGIN_ASYNC,
		payload,
	}),
};
