import { types } from "./types";

export const actionsAuth = {
  setAuth: payload => ({
    type: types.SET_AUTH,
    payload
  })
};
