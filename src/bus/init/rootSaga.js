import { all, call } from "redux-saga/effects";

import { watchCardData } from "../card/saga/watchers";

export function* rootSaga() {
  yield all([call(watchCardData), ]);
}
// call(watchAuth)