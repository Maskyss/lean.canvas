import { call, takeEvery, all } from "redux-saga/effects";

import { types } from "../types";

import { getData, dragCard } from "./workers";
import { addCard, deleteCard, editCard } from "./workers";

function* getDataWatcher() {
  yield takeEvery(types.GET_LIST, getData);
}



function* addCardWatcher() {
  yield takeEvery(types.ADD_CARD, addCard);
}

function* deleteCardWatcher() {
  yield takeEvery(types.DELETE_CARD, deleteCard);
}

function* editCardWatcher() {
  yield takeEvery(types.EDIT_CARD, editCard);
}

function* dragCardWatcher() {
  yield takeEvery(types.DRAG_HAPPENDED, dragCard);
}

export function* watchCardData() {
  yield all([
    call(getDataWatcher),
    call(addCardWatcher),
    call(deleteCardWatcher),
    call(editCardWatcher),
    call(dragCardWatcher)
  ]);
}
