import { combineReducers } from "redux";
import others from "./othersReducer";
import loggedInUser from "./loginReducer";
import signedUpUsers from "./signedUpReducer";

export default combineReducers({
  others,
  loggedInUser,
  signedUpUsers
  //warnings
});
