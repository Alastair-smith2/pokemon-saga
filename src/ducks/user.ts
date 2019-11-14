import {
  UserActionTypes,
  UserActions,
  UserFailure,
  UserFetch,
  UserSuccess,
  UserState,
  UserReducerState,
  UserCancel
} from "./types/user-types";

export const fetchUser = (name: string): UserFetch => {
  return {
    type: UserActions.FETCH,
    name
  };
};

export const loadUser = (data: string): UserSuccess => {
  return {
    type: UserActions.SUCCESS,
    data
  };
};

export const userFailure = (): UserFailure => {
  return {
    type: UserActions.FAILURE
  };
};

export const cancelFetch = (): UserCancel => {
  return {
    type: UserActions.CANCEL_FETCH
  };
};

const initialState: UserState = {
  authenticated: false,
  name: ""
};

const UserReducer = (
  state = initialState,
  action: UserActionTypes
): UserState => {
  switch (action.type) {
    case UserActions.SUCCESS:
      return {
        name: action.data,
        authenticated: true
      };
    case UserActions.FAILURE:
      return {
        name: "",
        authenticated: false
      };
    default:
      return state;
  }
};

export const selectUser = (state: UserReducerState) => state.user;

export default UserReducer;
