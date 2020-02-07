//Config
import { SOCKET_URL } from "./config";
import io from "socket.io-client";
//Instruments

export const socket = io(SOCKET_URL);

export const socketFunctions = {
  canvas: {
    createCanvas(canvasData, password, title) {
      socket.emit("createCanvas", { canvasData, password, title });
    },
    updateCanvas(token, canvasId, updatedCanvas) {
      socket.emit("updateCanvas", { token, canvasId, updatedCanvas });
    },
    refreshTokens(refreshToken) {
      socket.emit("refreshTokens", { refreshToken });
    },
    joinCanvasRoom(canvasId, password) {
      socket.emit("joinCanvasRoom", { canvasId, password });
    }
  }
};
// export const Api = {
// 	auth: {
// 		signup(userData) {
// 			return fetch(`${MAIN_URL}/accounts`, {
// 				method: 'POST',
// 				headers: {
// 					'Content-Type': 'application/json',
// 				},
// 				body: JSON.stringify(userData),
// 			});
// 		},

// 		login(userData) {
// 			return fetch(`${MAIN_URL}/accounts/login`, {
// 				method: 'POST',
// 				headers: {
// 					'Content-Type': 'application/json',
// 				},
// 				body: JSON.stringify(userData),
// 			});
// 		},

// 		getUserData() {
// 			return fetch(`${MAIN_URL}/accounts/current`, {
// 				method: 'GET',
// 				headers: {
// 					Authorization: localStorage.getItem('token'),
// 				},
// 			});
// 		},

// 		sendNews() {
// 			// setTimeout(() => {
// 			return 200;
// 			// }, 1000);
// 		},

// 	},
// };
