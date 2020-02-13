import { call, takeEvery, all } from "redux-saga/effects";

import { types } from "../types";

import { addCard,dragCard, deleteCard, editCard } from "./workers";


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
    call(addCardWatcher),
    call(deleteCardWatcher),
    call(editCardWatcher),
    call(dragCardWatcher)
  ]);
}
