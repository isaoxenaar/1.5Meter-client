import { combineReducers } from "redux";
import signedUpUsers from "./loginReducer";
import loggedInUser from "./loginReducer";

export default combineReducers({
  loggedInUser
});
