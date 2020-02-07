import { types } from "./types";

export const actionsAuth = {
  getAuth:(
    payload
  )=>({
    type: types.GET_AUTH,
    payload
  }),
  setAuth:(payload)=>({
    type: types.SET_AUTH,
    payload
  }),

};
