import { all, call } from "redux-saga/effects";
import { watchSearch } from "./pokemon";
import { watchUserLogin } from "./user";

export default function* rootSaga() {
  yield all([call(watchSearch), call(watchUserLogin)]);
}
