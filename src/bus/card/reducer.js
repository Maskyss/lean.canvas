import { Map, fromJS } from "immutable";

import { types } from "./types";

const initialState = Map({
  cardList: {

    problem:[],
    solution:[],
    keyMetrics:[],
    uniqueValueProposition:[],
    unfairAdvantage:[],
    channels:[],
    customerSegment:[],
    costStructure:[],
    revenueStreams:[],
  }
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
