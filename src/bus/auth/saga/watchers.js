import { call, takeEvery, all } from "redux-saga/effects";

import { types } from "../types";

import { getData } from "./workers";

function* getDataWatcher() {
  yield takeEvery(types.GET_AUTH, getData);
}

export function* watchAuth() {
  yield all([
    call(getDataWatcher),
  ]);
}
