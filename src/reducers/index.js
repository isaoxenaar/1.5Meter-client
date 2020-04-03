import { combineReducers } from "redux";
import distances from "./coordinatesReducer";
import loggedInUser from "./loginReducer";
//import signed

export default combineReducers({
  distances,
  loggedInUser
  //signedUpUsers
});
