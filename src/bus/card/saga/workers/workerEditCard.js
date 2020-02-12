import { put } from "redux-saga/effects";
import { actionsCard } from "../../actions";


export function* editCard({ payload }) {
  
    try {
      const [{ id, listID, cardText }, ...state] = payload;
  
      state[0][listID].find(card => {
        if (card.id === id) {
          card.text = cardText;
        }
      });
  
      yield put(actionsCard.setList(state[0]));
      localStorage.setItem("cardList",JSON.stringify(state[0]));

    } catch (err) {
      console.log(err);
    }
  }