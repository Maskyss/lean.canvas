import { Map, List, fromJS } from "immutable";

import { types } from "./types";
import uuid from "uuid";

const initialState = Map({
  cardList: 
  [{
    title: "to do",
    id: uuid.v4(),
    cards: [ 
    ]
  },
  {
    title: "doing",
    id: uuid.v4(),
    cards: [ 
    ]
  },
  {
    title: "done",
    id: uuid.v4(),
    cards: [ 
    ]
  },
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
            return state;
        }
      };