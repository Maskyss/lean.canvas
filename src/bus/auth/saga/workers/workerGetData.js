import { put } from "redux-saga/effects";
import { actionsAuth } from "../../actions";

export function* getData({payload}) {
  try {
    console.log('blablabla',payload)
    yield put(actionsAuth.setAuth(payload));
    
  } catch (err) {
    console.log(err);
  }
}
