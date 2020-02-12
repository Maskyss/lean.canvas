import { Map } from "immutable";

import { types } from "./types";

const initialState = Map({
  authData: 
   {id:'' }
});

export const updateAuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_AUTH:
      return state.set("authData", action.payload);
    default:
      return state;
  }
};
