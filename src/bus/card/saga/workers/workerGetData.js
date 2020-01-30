import { put } from "redux-saga/effects";
import { actionsCard } from "../../actions";

export function* getData() {
  try {
    const cardList = JSON.parse(localStorage.getItem("cardList"));
    if (cardList.length !== 0) {
      yield put(actionsCard.setList(cardList));
    }
  } catch (err) {
    console.log(err);
  }
}
