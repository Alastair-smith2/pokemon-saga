import { combineReducers } from "redux";
import pokemon from "./pokemon";
import comments from "./comments";
import ui from "./ui";
import user from "./user";

const reducer = combineReducers({
  pokemon,
  comments,
  ui,
  user
});

export type StoreState = ReturnType<typeof reducer>;
export default reducer;
