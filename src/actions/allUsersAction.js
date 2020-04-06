import request from "superagent";
import { baseUrl } from "./constants";

export const ALL_USERS = "ALL_USERS";

function allUsers(payload) {
  return {
    type: ALL_USERS,
    payload
  };
}

export const getUsers = () => (dispatch, getState) => {
  const state = getState();

  if (!state.signedUpUsers.length) {
    request(`${baseUrl}/user`)
      .then(response => {
        const action = allUsers(response.body);
        dispatch(action);
      })
      .catch(console.error);
  }
};
