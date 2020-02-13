import { put } from "redux-saga/effects";
import { actionsCard } from "../../actions";
import uuid from "uuid";

export function* addCard({ payload }) {
  try {
    const [{ text, listID }, ...state] = payload;

    const newCard = {
      text: text,
      id: uuid.v4()
    };

    state[0][listID] = state[0][listID].concat(newCard);

    yield put(actionsCard.setList(state[0]));

  } catch (err) {
    console.log(err);
  }
}