import { types } from "./types";

export const actionsCard = {
  getList:()=>({
    type: types.GET_LIST,
  }),
  setList:(payload)=>({
    type: types.SET_LIST,
    payload
  }),
  // setLocalStorage:()=>({
  //   type: types.SET_LIST,
  // }),
  addCard: payload => ({
    type: types.ADD_CARD,
    payload
  }),

 

  dragHappaned: payload=> ({
    type: types.DRAG_HAPPENDED,
    payload
  }),

  editCard: payload => ({
    type: types.EDIT_CARD,
    payload
  }),

  deleteCard: payload => ({
    type: types.DELETE_CARD,
    payload
  }),

};
