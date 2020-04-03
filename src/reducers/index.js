import { combineReducers } from "redux";
import distances from "./coordinatesReducer";
import loggedInUser from "./loginReducer";

export default combineReducers({
  distances,
  loggedInUser
});
