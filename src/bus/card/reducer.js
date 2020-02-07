import { Map, fromJS } from "immutable";

import { types } from "./types";

const initialState = Map({
  cardList: [
    {
      id: 0,
      cards: []
    },
    {
      id: 1,
      cards: []
    },
    {
      id: 2,
      cards: []
    },
    {
      id: 3,
      cards: []
    },
    {
      id: 4,
      cards: []
    },
    {
      id: 5,
      cards: []
    },
    {
      id: 6,
      cards: []
    },
    {
      id: 7,
      cards: []
    },
    {
      id: 8,
      cards: []
    }
  ]
});
//{ time: '', message: '' }

export const updateCardReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_LIST:
      return state.set("cardList", action.payload);
    case types.ADD_CARD:
      return state.update("cardList", () => fromJS(action.payload));

    case types.DRAG_HAPPENDED:
      return state.update("cardList", () => fromJS(action.payload));
    case types.EDIT_CARD:
      return state.update("cardList", () => fromJS(action.payload));
    case types.DELETE_CARD:
      return state.update("cardList", () => fromJS(action.payload));

    default:
      return initialState;
  }
};
