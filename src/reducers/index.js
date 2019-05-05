import { combineReducers } from "redux";
import UserGistListReducer from "./ReducerUserGistList";

const rootReducer = combineReducers({
  userGistList: UserGistListReducer
});

export default rootReducer;
