//Config
import { MAIN_URL } from './config';

//Instruments

export const Api = {
	auth: {
		signup(userData) {
			return fetch(`${MAIN_URL}/accounts`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(userData),
			});
		},

		login(userData) {
			return fetch(`${MAIN_URL}/accounts/login`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(userData),
			});
		},

		getUserData() {
			return fetch(`${MAIN_URL}/accounts/current`, {
				method: 'GET',
				headers: {
					Authorization: localStorage.getItem('token'),
				},
			});
		},

		sendNews() {
			// setTimeout(() => {
			return 200;
			// }, 1000);
		},

	},
};
