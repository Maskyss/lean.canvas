import { put } from "redux-saga/effects";
import { actionsCard } from "../../actions";
import uuid from "uuid";

export function* deleteCard({ payload }) {
  try {
    const [{ id, listID }, ...state] = payload;

    state[0][listID] = state[0][listID].filter(card => card.id !== id);

    yield put(actionsCard.setList(state[0]));
    localStorage.setItem("cardList",JSON.stringify(state[0]));

  } catch (err) {
    console.log(err);
  }
}



