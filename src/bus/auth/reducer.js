import { Map, fromJS } from "immutable";

import { types } from "./types";

const initialState = Map({
  authData: [
   {password:'', title:''}
  ]
});

export const updateAuthReducer = (state = initialState, action) => {
  console.log(state,action.payload )
  switch (action.type) {
    case types.SET_AUTH:
      return state.set("authData", action.payload);
    default:
      return initialState;
  }
};
