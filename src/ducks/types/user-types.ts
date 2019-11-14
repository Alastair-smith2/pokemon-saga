export enum UserActions {
  FETCH = "USER_FETCH",
  SUCCESS = "USER_SUCCESS",
  FAILURE = "USER_FAILURE",
  CANCEL_FETCH = "USER_CANCEL_FETCH"
}

export interface UserFetch {
  type: UserActions.FETCH;
  name: string;
}

export interface UserSuccess {
  type: UserActions.SUCCESS;
  data: string;
}

export interface UserFailure {
  type: UserActions.FAILURE;
}

export interface UserCancel {
  type: UserActions.CANCEL_FETCH;
}

export interface UserState {
  authenticated: boolean;
  name: string;
}

export type UserActionTypes = UserFetch | UserSuccess | UserFailure;

export interface UserReducerState {
  user: UserState;
}
