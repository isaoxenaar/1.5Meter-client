import request from "superagent";
import { baseUrl } from "./constants";

export const NEW_WARNING = "NEW_WARNING";
function newWarning(payload) {
  return {
    type: NEW_WARNING,
    payload
  };
}

export const createWarning = data => (dispatch, getState) => {
  const state = getState();
  const { loggedInUser } = state;
  console.log("loggedinuser", loggedInUser);
  request
    .post(`${baseUrl}/warning`)
    .set("Authorization", `Bearer ${loggedInUser.jwt}`)
    .send(data)
    .then(response => {
      const action = newWarning(response.body);
      dispatch(action);
    })
    .catch(console.error);
};
