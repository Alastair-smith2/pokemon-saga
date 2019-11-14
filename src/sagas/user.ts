import { put, takeEvery } from "redux-saga/effects";
import { loadUser, userFailure } from "../ducks/user";
import { UserActions } from "../ducks/types/user-types";

export function* fetchUserDetails({
  data
}: {
  type: UserActions.FETCH;
  data: string;
}) {
  try {
    yield put(loadUser(data));
  } catch (error) {
    yield put(userFailure());
  }
}

export function* watchUserLogin() {
  yield takeEvery(UserActions.FETCH, fetchUserDetails);
}

// single entry point to start all Sagas at once
